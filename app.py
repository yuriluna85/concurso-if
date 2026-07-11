import os
import json
from flask import Flask, render_template, jsonify, request, send_from_directory

app = Flask(__name__, template_folder='.', static_folder='static')

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
EDITAIS_DIR = os.path.join(BASE_DIR, "editais")
PROVAS_DIR = os.path.join(BASE_DIR, "provas_gabaritos")
PROGRESS_FILE = os.path.join(BASE_DIR, 'progress.json')
QUESTIONS_FILE = os.path.join(BASE_DIR, 'questions.json')
DISCURSIVAS_FILE = os.path.join(BASE_DIR, 'discursivas.json')

CARGOS_DIRS = {
    "pedagogo": os.path.join(PROVAS_DIR, "pedagogo"),
    "tecnico_assuntos_educacionais": os.path.join(PROVAS_DIR, "tecnico_assuntos_educacionais"),
    "assistente_alunos": os.path.join(PROVAS_DIR, "assistente_alunos")
}

DEFAULT_PROGRESS = {
    "tecnico_assuntos_educacionais": {
        "name": "Técnico em Assuntos Educacionais",
        "checked": []
    },
    "pedagogo": {
        "name": "Pedagogo",
        "checked": []
    },
    "assistente_alunos": {
        "name": "Assistente de Alunos",
        "checked": []
    }
}

def load_progress():
    if os.path.exists(PROGRESS_FILE):
        try:
            with open(PROGRESS_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            return DEFAULT_PROGRESS
    return DEFAULT_PROGRESS

def save_progress(data):
    try:
        with open(PROGRESS_FILE, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=4, ensure_ascii=False)
        return True
    except Exception as e:
        print(f"Error saving progress: {e}")
        return False

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/files')
def list_files():
    files_list = []
    
    # Scan editais folder
    if os.path.exists(EDITAIS_DIR):
        try:
            for filename in os.listdir(EDITAIS_DIR):
                if filename.endswith(".pdf"):
                    filepath = os.path.join(EDITAIS_DIR, filename)
                    size_mb = os.path.getsize(filepath) / (1024 * 1024)
                    files_list.append({
                        "category": "Editais e Manuais",
                        "name": filename,
                        "size": f"{size_mb:.2f} MB",
                        "url": f"/files/editais/{filename}"
                    })
        except Exception as e:
            print(f"Error scanning editais: {e}")
            
    # Scan cargo subfolders
    for cargo_key, folder in CARGOS_DIRS.items():
        if os.path.exists(folder):
            try:
                cargo_name = "Pedagogo" if cargo_key == "pedagogo" else "Técnico em Assuntos Educacionais" if cargo_key == "tecnico_assuntos_educacionais" else "Assistente de Alunos"
                for filename in os.listdir(folder):
                    if filename.endswith(".pdf"):
                        filepath = os.path.join(folder, filename)
                        size_mb = os.path.getsize(filepath) / (1024 * 1024)
                        files_list.append({
                            "category": f"Provas e Gabaritos - {cargo_name}",
                            "name": filename,
                            "size": f"{size_mb:.2f} MB",
                            "url": f"/files/{cargo_key}/{filename}"
                        })
            except Exception as e:
                print(f"Error scanning folder {cargo_key}: {e}")
                
    return jsonify(files_list)

@app.route('/files/<category>/<path:filename>')
def download_file(category, filename):
    if category == 'editais':
        directory = EDITAIS_DIR
    elif category in CARGOS_DIRS:
        directory = CARGOS_DIRS[category]
    else:
        return "Categoria inválida", 400
        
    if not os.path.exists(directory):
        return "Pasta de arquivos não encontrada", 404
    return send_from_directory(directory, filename, as_attachment=True)

@app.route('/api/progress', methods=['GET', 'POST'])
def handle_progress():
    progress_data = load_progress()
    if request.method == 'POST':
        req_data = request.get_json()
        if not req_data:
            return jsonify({"error": "Invalid request body"}), 400
        
        for key in DEFAULT_PROGRESS.keys():
            if key in req_data:
                progress_data[key]["checked"] = req_data[key].get("checked", [])
                
        if save_progress(progress_data):
            return jsonify({"status": "success", "data": progress_data})
        else:
            return jsonify({"error": "Failed to save progress"}), 500
            
    return jsonify(progress_data)

@app.route('/api/questions')
def get_questions():
    if os.path.exists(QUESTIONS_FILE):
        try:
            with open(QUESTIONS_FILE, 'r', encoding='utf-8') as f:
                return jsonify(json.load(f))
        except Exception as e:
            return jsonify({"error": str(e)}), 500
    return jsonify([])

@app.route('/api/discursivas')
def get_discursivas():
    if os.path.exists(DISCURSIVAS_FILE):
        try:
            with open(DISCURSIVAS_FILE, 'r', encoding='utf-8') as f:
                return jsonify(json.load(f))
        except Exception as e:
            return jsonify({"error": str(e)}), 500
    return jsonify([])

if __name__ == '__main__':
    app.run(debug=True, port=5050)
