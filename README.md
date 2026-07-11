# YLuna85 Labs — Hub de Estudos Concursos IFs
> **Projeto desenvolvido sob a chancela 🔬 YLuna85 LABs**

Painel interativo de estudos desenvolvido em Python (Flask) e HTML/CSS/JS para organizar e alavancar a preparação para concursos públicos dos Institutos Federais da Bahia (**IFBA** e **IF Baiano**), focando nos cargos pedagógicos:
- **Técnico em Assuntos Educacionais** (TAE - Nível Superior/Nível E)
- **Pedagogo** (Nível Superior/Nível E)
- **Assistente de Alunos** (Nível Médio/Nível D) e demais áreas de apoio pedagógico.

---

## 🎨 Identidade Visual Institucional
O painel foi desenhado adotando um tema escuro premium (*Studio Console Dark*) com realce nas cores da identidade visual do **IF Baiano**:
- **Verde Institucional (Primário)**: `#3E9A2D` — Utilizado para botões principais, percentuais de conclusão, badges de conformidade e estados ativos.
- **Vermelho Institucional (Destaque/Acento)**: `#C80710` — Utilizado para ícones de arquivos PDF, marcadores de atenção e feedbacks de erro.
- **Fundo / Background**: `#0b0f19` (Tech Navy) e `#121b2d` (Slate Card) — Tons modernos de alto contraste que evitam a fadiga visual durante longas horas de estudo.

---

## ⚙️ Funcionalidades Principais

1. **Trilhas de Estudo Personalizadas**:
   - Checklists específicos divididos por blocos: *Língua Portuguesa*, *Legislação Geral do RJU (Lei 8.112/90)* e *Conhecimentos Específicos/Legislação Educacional (LDB 9.394/96, EPT, ECA)*.
   - Cálculo automático de progresso global em tempo real na aba principal e no Dashboard.

2. **Simulador de Provas Objetivas**:
   - Mecanismo integrado de questões de múltipla escolha com carregamento via API a partir do arquivo `questions.json`.
   - Filtro dinâmico por matéria e feedback imediato com justificativa/gabarito comentado de cada questão.

3. **Banco de Casos Discursivos (Estudos de Caso)**:
   - Resolução guiada de discursivas com critérios formais de correção e padrão de resposta para cada cargo pedagógico (mediação escolar, inclusão na EPT, PPP e conflitos escolares).

4. **Biblioteca Digital Local**:
   - Varredura automática das pastas físicas `editais/` e `provas_gabaritos/` (subdivididas por cargo) pelo servidor Flask.
   - Exibição de tamanho em MB e links diretos para download na interface.

5. **Aba de Carreira & Salários (PCCTAE)**:
   - Tabela simplificada de vencimentos básicos (Níveis D e E) e incentivos à qualificação (titulação de Especialista +30%, Mestre +52% e Doutor +75%).
   - Detalhamento didático das regras de progressão horizontal por mérito e capacitação.

6. **Acessibilidade e Usabilidade (WCAG)**:
   - Modo de **Alto Contraste** (`body.high-contrast`) com botões de controle sólidos e visíveis.
   - Ajuste dinâmico do tamanho das fontes do site (aumentar `A+`, diminuir `A-` e restaurar `A`).
   - Interface 100% responsiva (Mobile-First) que se adapta perfeitamente a tablets e telas verticais de smartphones.

---

## 📁 Estrutura do Projeto

```text
Concurso IFBA IFBaiano/
├── editais/                     # PDFs de editais passados e manuais
├── provas_gabaritos/            # PDFs de provas anteriores e gabaritos
│   ├── pedagogo/                # Provas de Pedagogo
│   ├── tecnico_assuntos_educacionais/ # Provas de TAE
│   └── assistente_alunos/       # Provas de Assistente de Alunos
├── static/
│   ├── css/
│   │   └── style.css            # Estilos visuais e acessibilidade
│   └── js/
│       └── app.js               # Lógica de controle do Hub, checklist e quiz
├── templates/
├── app.py                       # Servidor Flask e varredura de arquivos
├── questions.json               # Questões objetivas cadastradas
├── discursivas.json             # Questões discursivas cadastradas
└── progress.json                # Persistência de checklists (criado pelo Flask)
```

---

## 🚀 Como Executar Localmente

1. **Instale as dependências** (Flask e BeautifulSoup):
   ```bash
   pip install flask beautifulsoup4
   ```
2. **Execute o servidor Flask**:
   ```bash
   python app.py
   ```
3. **Acesse no navegador**:
   Abra `http://127.0.0.1:5050/`

> [!NOTE]  
> Quando hospedado de forma estática no **GitHub Pages**, todo o progresso do checklist e os simulados continuam funcionando integralmente, persistindo de forma volátil diretamente no **localStorage** do navegador do usuário. Apenas o download de arquivos PDFs físicos locais dependerá do servidor Python local estar ativo.

---

## 📜 Log de Atualizações (Changelog)

### 📅 11/07/2026 - Versão Inicial 1.0 (Hub IFBA/IFBaiano)
- 🏗️ **Estrutura de Pastas**: Criada a árvore do projeto com subpastas organizadas para Editais e Provas de Pedagogo, TAE e Assistente de Alunos.
- 🐍 **Automação de Downloads**: Script de download movido para a pasta central de scripts (`_Scripts/download_if_exams.py`).
- 🎛️ **Dashboard Interativo & Checklist**: Painel responsivo que compila o progresso de estudos dinamicamente de acordo com o cargo escolhido.
- 🧠 **Simulador & Questões**: Adicionado banco inicial de questões objetivas e estudos de caso discursivos na área educacional.
- ♿ **WCAG Acessibilidade**: Controles de contraste e tamanho de fonte estruturados com botões sólidos de alta visibilidade alinhados à esquerda da tela.
- 🎨 **Correções de Layout & Responsividade**:
  - Removido o conflito de grid duplo que causava o deslocamento e sobreposição dos elementos à direita no desktop.
  - Implementado menu horizontal responsivo para telas menores que `1024px`, garantindo que os botões de navegação não desapareçam ou fiquem sobrepostos no celular/tablet.
- 🛡️ **Suporte Estático Completo (GitHub Pages)**: Dados de questões e discursivas embutidos em formato fallback no Javascript principal, garantindo que o simulador e estudos de caso rodem perfeitamente de forma offline sem depender de requisições de API HTTP locais.
- 🐛 **Correção de Sintaxe no JS**: Corrigida a duplicidade acidental na declaração de variáveis globais que gerava o erro de sintaxe e impedia a inicialização das funções de navegação no navegador (`switchTab`).


