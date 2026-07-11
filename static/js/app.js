// ============================================================
// IF CONCURSOS HUB — ESTUDOS IFBA & IF BAIANO
// Main Interactive Application Logic
// ============================================================

// --- 1. STATE & GLOBAL CONFIGS -----------------------------
let currentCargo = "tecnico_assuntos_educacionais";
let currentTab = "dashboard";
let checkedItems = [];
let localFiles = [];
let currentQuestionIndex = 0;
let selectedOptionIndex = null;

// Default Mock Questions for Offline/GitHub Pages support
let quizQuestions = [
  {
    "id": "q1",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 1 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q2",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 2 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q3",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 3 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q4",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 4 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q5",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 5 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q6",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 6 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q7",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 7 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q8",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 8 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q9",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 9 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q10",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 10 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q11",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 11 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q12",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 12 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q13",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 13 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q14",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 14 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q15",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 15 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q16",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 16 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q17",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 17 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q18",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 18 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q19",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 19 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q20",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 20 (TAE) - Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, a organização curricular deve contemplar a articulação entre os saberes. Em relação a isso, a interdisciplinaridade deve ser entendida como:",
    "options": [
      "A eliminação das disciplinas do currículo escolar para fusão total dos conteúdos.",
      "Um princípio de integração que supera a fragmentação e promove o diálogo entre campos do saber.",
      "Uma atividade complementar realizada fora do horário regular de aulas.",
      "A subordinação de todas as matérias à disciplina de Língua Portuguesa.",
      "A padronização das avaliações sem levar em conta as especificidades regionais."
    ],
    "resposta": 1,
    "justificativa": "A interdisciplinaridade é um princípio que visa integrar e articular diferentes áreas do conhecimento, combatendo a fragmentação mecânica do currículo escolar.",
    "explicacoes": [
      "Opção INCORRETA. A interdisciplinaridade não elimina as disciplinas, mas promove o diálogo entre elas.",
      "Opção CORRETA. Representa perfeitamente o princípio pedagógico da interdisciplinaridade.",
      "Opção INCORRETA. Deve ser vivenciada de forma orgânica no cotidiano da sala de aula, não como atividade isolada.",
      "Opção INCORRETA. Não há subordinação, mas cooperação horizontal entre as disciplinas curriculares.",
      "Opção INCORRETA. O princípio não visa homogeneização de avaliações, mas sim articulação de saberes pedagógicos."
    ]
  },
  {
    "id": "q21",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 21 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q22",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 22 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q23",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 23 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q24",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 24 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q25",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 25 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q26",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 26 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q27",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 27 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q28",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 28 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q29",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 29 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q30",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 30 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q31",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 31 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q32",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 32 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q33",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 33 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q34",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 34 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q35",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 35 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q36",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 36 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q37",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 37 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q38",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 38 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q39",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 39 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q40",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 40 (TAE) - Na perspectiva da avaliação formativa, proposta por autores como Jussara Hoffmann e Philippe Perrenoud, o erro cometido pelo estudante deve ser compreendido como:",
    "options": [
      "Um indicador de fracasso final que deve ser punido com nota baixa.",
      "Uma distração sem importância que o professor deve ignorar na aula.",
      "Um ponto de partida para a intervenção pedagógica e regulação da aprendizagem.",
      "Um defeito cognitivo que indica a necessidade de encaminhamento à educação especial.",
      "Uma evidência de que a metodologia de ensino adotada é irretocável."
    ],
    "resposta": 2,
    "justificativa": "A avaliação formativa ressignifica o erro como uma pista do processo de raciocínio do aluno, servindo de base para o replanejamento docente e mediação pedagógica.",
    "explicacoes": [
      "Opção INCORRETA. Esta visão pertence à avaliação tradicional/somativa classificatória.",
      "Opção INCORRETA. O erro não deve ser negligenciado, mas sim analisado pedagogicamente.",
      "Opção CORRETA. O erro é uma oportunidade rica de diagnóstico e avanço na mediação educativa.",
      "Opção INCORRETA. O erro comum faz parte da construção de conhecimento, não configurando distúrbio ou deficiência.",
      "Opção INCORRETA. O erro pode, pelo contrário, sugerir que a metodologia precisa ser repensada pelo professor."
    ]
  },
  {
    "id": "q41",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 41 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q42",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 42 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q43",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 43 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q44",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 44 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q45",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 45 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q46",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 46 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q47",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 47 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q48",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 48 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q49",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 49 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q50",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 50 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q51",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 51 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q52",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 52 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q53",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 53 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q54",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 54 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q55",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 55 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q56",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 56 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q57",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 57 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q58",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 58 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q59",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 59 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q60",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação do Serviço Público",
    "enunciado": "Questão 60 (TAE) - Conforme dispõe a Lei nº 8.112/1990, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, decorrente de:",
    "options": [
      "Aposentadoria voluntária por tempo de contribuição.",
      "Invalidade de sua demissão por decisão administrativa ou judicial, com ressarcimento de vantagens.",
      "Verificação de que a demissão foi regular e justa pela comissão de ética.",
      "Aproveitamento em outro cargo compatível com suas limitações físicas supervenientes.",
      "Promoção automática por antiguidade na carreira PCCTAE."
    ],
    "resposta": 1,
    "justificativa": "A reintegração ocorre quando a demissão de um servidor estável é invalidada por via administrativa ou judicial, com a consequente restituição de todos os direitos e vantagens.",
    "explicacoes": [
      "Opção INCORRETA. A aposentadoria não gera reintegração (a reversão é o retorno do aposentador).",
      "Opção CORRETA. Define perfeitamente a reintegração conforme o Artigo 28 da Lei 8.112/90.",
      "Opção INCORRETA. Se a demissão for mantida como justa, o servidor não retorna ao cargo.",
      "Opção INCORRETA. O retorno ou adaptação devido a limitações físicas é chamado de readaptação.",
      "Opção INCORRETA. A promoção é movimentação de padrão na carreira, não se confundindo com reintegração."
    ]
  },
  {
    "id": "q61",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 61 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q62",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 62 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q63",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 63 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q64",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 64 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q65",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 65 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q66",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 66 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q67",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 67 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q68",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 68 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q69",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 69 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q70",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 70 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q71",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 71 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q72",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 72 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q73",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 73 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q74",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 74 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q75",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 75 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q76",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 76 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q77",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 77 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q78",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 78 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q79",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 79 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q80",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 80 (TAE) - Identifique a alternativa na qual a regência verbal está em conformidade com a norma gramatical padrão:",
    "options": [
      "Nós assistimos o filme de treinamento ontem à tarde.",
      "O pedagogo aspira o cargo de coordenação pedagógica do campus.",
      "Os técnicos-administrativos preferem mais a prática do que a teoria acadêmica.",
      "O diretor perdoou aos servidores pela falha involuntária na ata.",
      "Os alunos esqueceram das regras de convivência do refeitório."
    ],
    "resposta": 3,
    "justificativa": "O verbo perdoar, quando se refere a pessoas, rege objeto indireto com preposição 'a' ('perdoar a alguém'). Logo, 'perdoou aos servidores' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O verbo assistir no sentido de presenciar exige preposição 'a' ('assistimos ao filme').",
      "Opção INCORRETA. O verbo aspirar no sentido de desejar rege preposição 'a' ('aspira ao cargo').",
      "Opção INCORRETA. O verbo preferir não admite intensificadores como 'mais' ou 'do que' ('preferem a prática à teoria').",
      "Opção CORRETA. O verbo perdoar é transitivo indireto para pessoas, exigindo a preposição 'a'.",
      "Opção INCORRETA. O verbo esquecer só admite preposição se for pronominal ('esqueceram-se das regras' ou 'esqueceram as regras')."
    ]
  },
  {
    "id": "q81",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 1 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q82",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 2 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q83",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 3 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q84",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 4 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q85",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 5 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q86",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 6 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q87",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 7 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q88",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 8 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q89",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 9 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q90",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 10 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q91",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 11 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q92",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 12 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q93",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 13 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q94",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 14 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q95",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 15 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q96",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 16 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q97",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 17 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q98",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 18 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q99",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 19 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q100",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 20 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q101",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 21 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q102",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 22 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q103",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 23 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q104",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 24 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q105",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 25 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q106",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 26 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q107",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 27 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q108",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 28 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q109",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 29 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q110",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 30 (Pedagogo) - No contexto do planejamento participativo e da gestão escolar democrática, o papel central do pedagogo na escola deve ser caracterizado por:",
    "options": [
      "Fiscalizar e punir os docentes que não cumprem rigorosamente a grade de horários.",
      "Articular o trabalho coletivo, integrando os segmentos escolares na construção do PPP.",
      "Substituir os professores ausentes dando aulas de qualquer disciplina.",
      "Decidir de forma centralizada os rumos financeiros e pedagógicos da instituição.",
      "Isolar-se na sala da coordenação elaborando relatórios burocráticos sem diálogo."
    ],
    "resposta": 1,
    "justificativa": "O pedagogo atua como um articulador e mediador do processo educativo, estimulando a gestão democrática e a participação de todos na construção coletiva do PPP.",
    "explicacoes": [
      "Opção INCORRETA. O foco do pedagogo não é fiscalizador ou policialesco, mas sim formativo e integrador.",
      "Opção CORRETA. Reflete o papel democrático e articulador do pedagogo escolar contemporâneo.",
      "Opção INCORRETA. O pedagogo não é um substituto de emergência de aulas, pois suas funções pedagógicas são específicas.",
      "Opção INCORRETA. A tomada de decisão deve ser coletiva (colegiada) nas instâncias democráticas escolares.",
      "Opção INCORRETA. A prática isolada e puramente burocrática esvazia a função social e pedagógica do cargo."
    ]
  },
  {
    "id": "q111",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 31 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q112",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 32 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q113",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 33 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q114",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 34 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q115",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 35 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q116",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 36 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q117",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 37 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q118",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 38 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q119",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 39 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q120",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 40 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q121",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 41 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q122",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 42 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q123",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 43 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q124",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 44 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q125",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 45 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q126",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 46 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q127",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 47 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q128",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 48 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q129",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 49 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q130",
    "cargo": "pedagogo",
    "materia": "Legislação Educacional",
    "enunciado": "Questão 50 (Pedagogo) - A Lei de Diretrizes e Bases da Educação Nacional (LDB), em seu artigo 12, estipula as obrigações dos estabelecimentos de ensino. Uma delas é:",
    "options": [
      "Promover a segregação de estudantes com deficiência em turmas especiais.",
      "Garantir a reprovação de estudantes que não atinjam médias de desempenho.",
      "Notificar ao Conselho Tutelar a relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
      "Impor o uso obrigatório de uniformes escolares sob pena de exclusão da matrícula.",
      "Definir a grade de aulas de forma a priorizar as disciplinas profissionalizantes de mercado."
    ],
    "resposta": 2,
    "justificativa": "A LDB (Art. 12, inciso VIII) determina a obrigatoriedade das escolas notificarem o Conselho Tutelar quando o aluno atinge faltas superiores a 30% do limite legal permitido.",
    "explicacoes": [
      "Opção INCORRETA. A lei impõe a inclusão de todos os alunos preferencialmente na rede regular de ensino.",
      "Opção INCORRETA. A escola deve prover meios para a recuperação de alunos com menor rendimento, combatendo a retenção.",
      "Opção CORRETA. Reflete a redação atual do art. 12, inciso VIII da LDB (alterado para o patamar de 30%).",
      "Opção INCORRETA. A restrição de acesso por falta de uniforme é abusiva e atenta contra o direito constitucional à educação.",
      "Opção INCORRETA. As grades devem contemplar a formação humana integral básica, não apenas fins corporativos ou industriais."
    ]
  },
  {
    "id": "q131",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 51 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q132",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 52 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q133",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 53 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q134",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 54 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q135",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 55 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q136",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 56 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q137",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 57 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q138",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 58 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q139",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 59 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q140",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 60 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q141",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 61 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q142",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 62 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q143",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 63 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q144",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 64 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q145",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 65 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q146",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 66 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q147",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 67 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q148",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 68 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q149",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 69 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q150",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 70 (Pedagogo) - O Atendimento Educacional Especializado (AEE), estabelecido pelas diretrizes nacionais de educação especial, deve ocorrer preferencialmente:",
    "options": [
      "No contraturno escolar, na sala de recursos multifuncionais da própria escola ou de outra escola regular.",
      "Durante o horário regular das aulas, isolando o aluno em uma sala separada da turma.",
      "Nas dependências de clínicas terapêuticas de reabilitação sem vínculo com o ensino regular.",
      "Na residência do estudante, ministrado pelos próprios pais ou responsáveis legais.",
      "Apenas aos finais de semana e feriados para não atrapalhar o calendário acadêmico."
    ],
    "resposta": 0,
    "justificativa": "O AEE deve ser realizado em salas de recursos multifuncionais no contraturno das aulas regulares, visando complementar ou suplementar a formação do aluno com deficiência, TGD ou Altas Habilidades.",
    "explicacoes": [
      "Opção CORRETA. Condiz com as diretrizes e marcos regulatórios da Educação Especial e da Lei Brasileira de Inclusão (LBI).",
      "Opção INCORRETA. Retirar o aluno da sala regular no horário de aula prejudica sua socialização e escolarização comum.",
      "Opção INCORRETA. O AEE é um serviço pedagógico, não de cunho puramente clínico ou médico.",
      "Opção INCORRETA. É dever da escola e do Estado prover o serviço por professores especialistas na escola.",
      "Opção INCORRETA. O AEE faz parte do horário letivo regular complementar (contraturno), não de plantões de final de semana."
    ]
  },
  {
    "id": "q151",
    "cargo": "pedagogo",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 71 (Pedagogo) - Assinale a frase na qual a crase foi empregada incorretamente perante a norma gramatical culta:",
    "options": [
      "A pedagoga do campus prestou orientações à aluna do curso subsequente.",
      "Nós fomos à escola estadual participar da plenária comunitária.",
      "O diretor referiu-se àqueles relatórios pedagógicos na reunião.",
      "O palestrante começou à falar sobre inclusão escolar de forma dinâmica.",
      "As pressas, a coordenadora pedagógica organizou a sala de dinâmicas."
    ],
    "resposta": 3,
    "justificativa": "A crase é proibida antes de verbos ('começou a falar'), pois verbos não admitem artigo feminino 'a'.",
    "explicacoes": [
      "Opção INCORRETA (Crase correta). O verbo prestar exige preposição e o termo feminino 'aluna' aceita artigo.",
      "Opção INCORRETA (Crase correta). O verbo 'ir' exige preposição ('fomos a') que se contrai com o artigo de 'escola'.",
      "Opção INCORRETA (Crase correta). O verbo 'referir-se' exige preposição 'a' que se contrai com o 'a' inicial de 'àqueles'.",
      "Opção CORRETA (Gabarito). A crase está incorreta porque 'falar' é verbo, inviabilizando o acento grave indicativo de crase.",
      "Opção INCORRETA (Crase correta). 'Às pressas' é locução adverbial feminina plural de modo, devendo receber crase (embora falte o 's' na grafia da alternativa)."
    ]
  },
  {
    "id": "q152",
    "cargo": "pedagogo",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 72 (Pedagogo) - Assinale a frase na qual a crase foi empregada incorretamente perante a norma gramatical culta:",
    "options": [
      "A pedagoga do campus prestou orientações à aluna do curso subsequente.",
      "Nós fomos à escola estadual participar da plenária comunitária.",
      "O diretor referiu-se àqueles relatórios pedagógicos na reunião.",
      "O palestrante começou à falar sobre inclusão escolar de forma dinâmica.",
      "As pressas, a coordenadora pedagógica organizou a sala de dinâmicas."
    ],
    "resposta": 3,
    "justificativa": "A crase é proibida antes de verbos ('começou a falar'), pois verbos não admitem artigo feminino 'a'.",
    "explicacoes": [
      "Opção INCORRETA (Crase correta). O verbo prestar exige preposição e o termo feminino 'aluna' aceita artigo.",
      "Opção INCORRETA (Crase correta). O verbo 'ir' exige preposição ('fomos a') que se contrai com o artigo de 'escola'.",
      "Opção INCORRETA (Crase correta). O verbo 'referir-se' exige preposição 'a' que se contrai com o 'a' inicial de 'àqueles'.",
      "Opção CORRETA (Gabarito). A crase está incorreta porque 'falar' é verbo, inviabilizando o acento grave indicativo de crase.",
      "Opção INCORRETA (Crase correta). 'Às pressas' é locução adverbial feminina plural de modo, devendo receber crase (embora falte o 's' na grafia da alternativa)."
    ]
  },
  {
    "id": "q153",
    "cargo": "pedagogo",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 73 (Pedagogo) - Assinale a frase na qual a crase foi empregada incorretamente perante a norma gramatical culta:",
    "options": [
      "A pedagoga do campus prestou orientações à aluna do curso subsequente.",
      "Nós fomos à escola estadual participar da plenária comunitária.",
      "O diretor referiu-se àqueles relatórios pedagógicos na reunião.",
      "O palestrante começou à falar sobre inclusão escolar de forma dinâmica.",
      "As pressas, a coordenadora pedagógica organizou a sala de dinâmicas."
    ],
    "resposta": 3,
    "justificativa": "A crase é proibida antes de verbos ('começou a falar'), pois verbos não admitem artigo feminino 'a'.",
    "explicacoes": [
      "Opção INCORRETA (Crase correta). O verbo prestar exige preposição e o termo feminino 'aluna' aceita artigo.",
      "Opção INCORRETA (Crase correta). O verbo 'ir' exige preposição ('fomos a') que se contrai com o artigo de 'escola'.",
      "Opção INCORRETA (Crase correta). O verbo 'referir-se' exige preposição 'a' que se contrai com o 'a' inicial de 'àqueles'.",
      "Opção CORRETA (Gabarito). A crase está incorreta porque 'falar' é verbo, inviabilizando o acento grave indicativo de crase.",
      "Opção INCORRETA (Crase correta). 'Às pressas' é locução adverbial feminina plural de modo, devendo receber crase (embora falte o 's' na grafia da alternativa)."
    ]
  },
  {
    "id": "q154",
    "cargo": "pedagogo",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 74 (Pedagogo) - Assinale a frase na qual a crase foi empregada incorretamente perante a norma gramatical culta:",
    "options": [
      "A pedagoga do campus prestou orientações à aluna do curso subsequente.",
      "Nós fomos à escola estadual participar da plenária comunitária.",
      "O diretor referiu-se àqueles relatórios pedagógicos na reunião.",
      "O palestrante começou à falar sobre inclusão escolar de forma dinâmica.",
      "As pressas, a coordenadora pedagógica organizou a sala de dinâmicas."
    ],
    "resposta": 3,
    "justificativa": "A crase é proibida antes de verbos ('começou a falar'), pois verbos não admitem artigo feminino 'a'.",
    "explicacoes": [
      "Opção INCORRETA (Crase correta). O verbo prestar exige preposição e o termo feminino 'aluna' aceita artigo.",
      "Opção INCORRETA (Crase correta). O verbo 'ir' exige preposição ('fomos a') que se contrai com o artigo de 'escola'.",
      "Opção INCORRETA (Crase correta). O verbo 'referir-se' exige preposição 'a' que se contrai com o 'a' inicial de 'àqueles'.",
      "Opção CORRETA (Gabarito). A crase está incorreta porque 'falar' é verbo, inviabilizando o acento grave indicativo de crase.",
      "Opção INCORRETA (Crase correta). 'Às pressas' é locução adverbial feminina plural de modo, devendo receber crase (embora falte o 's' na grafia da alternativa)."
    ]
  },
  {
    "id": "q155",
    "cargo": "pedagogo",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 75 (Pedagogo) - Assinale a frase na qual a crase foi empregada incorretamente perante a norma gramatical culta:",
    "options": [
      "A pedagoga do campus prestou orientações à aluna do curso subsequente.",
      "Nós fomos à escola estadual participar da plenária comunitária.",
      "O diretor referiu-se àqueles relatórios pedagógicos na reunião.",
      "O palestrante começou à falar sobre inclusão escolar de forma dinâmica.",
      "As pressas, a coordenadora pedagógica organizou a sala de dinâmicas."
    ],
    "resposta": 3,
    "justificativa": "A crase é proibida antes de verbos ('começou a falar'), pois verbos não admitem artigo feminino 'a'.",
    "explicacoes": [
      "Opção INCORRETA (Crase correta). O verbo prestar exige preposição e o termo feminino 'aluna' aceita artigo.",
      "Opção INCORRETA (Crase correta). O verbo 'ir' exige preposição ('fomos a') que se contrai com o artigo de 'escola'.",
      "Opção INCORRETA (Crase correta). O verbo 'referir-se' exige preposição 'a' que se contrai com o 'a' inicial de 'àqueles'.",
      "Opção CORRETA (Gabarito). A crase está incorreta porque 'falar' é verbo, inviabilizando o acento grave indicativo de crase.",
      "Opção INCORRETA (Crase correta). 'Às pressas' é locução adverbial feminina plural de modo, devendo receber crase (embora falte o 's' na grafia da alternativa)."
    ]
  },
  {
    "id": "q156",
    "cargo": "pedagogo",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 76 (Pedagogo) - Assinale a frase na qual a crase foi empregada incorretamente perante a norma gramatical culta:",
    "options": [
      "A pedagoga do campus prestou orientações à aluna do curso subsequente.",
      "Nós fomos à escola estadual participar da plenária comunitária.",
      "O diretor referiu-se àqueles relatórios pedagógicos na reunião.",
      "O palestrante começou à falar sobre inclusão escolar de forma dinâmica.",
      "As pressas, a coordenadora pedagógica organizou a sala de dinâmicas."
    ],
    "resposta": 3,
    "justificativa": "A crase é proibida antes de verbos ('começou a falar'), pois verbos não admitem artigo feminino 'a'.",
    "explicacoes": [
      "Opção INCORRETA (Crase correta). O verbo prestar exige preposição e o termo feminino 'aluna' aceita artigo.",
      "Opção INCORRETA (Crase correta). O verbo 'ir' exige preposição ('fomos a') que se contrai com o artigo de 'escola'.",
      "Opção INCORRETA (Crase correta). O verbo 'referir-se' exige preposição 'a' que se contrai com o 'a' inicial de 'àqueles'.",
      "Opção CORRETA (Gabarito). A crase está incorreta porque 'falar' é verbo, inviabilizando o acento grave indicativo de crase.",
      "Opção INCORRETA (Crase correta). 'Às pressas' é locução adverbial feminina plural de modo, devendo receber crase (embora falte o 's' na grafia da alternativa)."
    ]
  },
  {
    "id": "q157",
    "cargo": "pedagogo",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 77 (Pedagogo) - Assinale a frase na qual a crase foi empregada incorretamente perante a norma gramatical culta:",
    "options": [
      "A pedagoga do campus prestou orientações à aluna do curso subsequente.",
      "Nós fomos à escola estadual participar da plenária comunitária.",
      "O diretor referiu-se àqueles relatórios pedagógicos na reunião.",
      "O palestrante começou à falar sobre inclusão escolar de forma dinâmica.",
      "As pressas, a coordenadora pedagógica organizou a sala de dinâmicas."
    ],
    "resposta": 3,
    "justificativa": "A crase é proibida antes de verbos ('começou a falar'), pois verbos não admitem artigo feminino 'a'.",
    "explicacoes": [
      "Opção INCORRETA (Crase correta). O verbo prestar exige preposição e o termo feminino 'aluna' aceita artigo.",
      "Opção INCORRETA (Crase correta). O verbo 'ir' exige preposição ('fomos a') que se contrai com o artigo de 'escola'.",
      "Opção INCORRETA (Crase correta). O verbo 'referir-se' exige preposição 'a' que se contrai com o 'a' inicial de 'àqueles'.",
      "Opção CORRETA (Gabarito). A crase está incorreta porque 'falar' é verbo, inviabilizando o acento grave indicativo de crase.",
      "Opção INCORRETA (Crase correta). 'Às pressas' é locução adverbial feminina plural de modo, devendo receber crase (embora falte o 's' na grafia da alternativa)."
    ]
  },
  {
    "id": "q158",
    "cargo": "pedagogo",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 78 (Pedagogo) - Assinale a frase na qual a crase foi empregada incorretamente perante a norma gramatical culta:",
    "options": [
      "A pedagoga do campus prestou orientações à aluna do curso subsequente.",
      "Nós fomos à escola estadual participar da plenária comunitária.",
      "O diretor referiu-se àqueles relatórios pedagógicos na reunião.",
      "O palestrante começou à falar sobre inclusão escolar de forma dinâmica.",
      "As pressas, a coordenadora pedagógica organizou a sala de dinâmicas."
    ],
    "resposta": 3,
    "justificativa": "A crase é proibida antes de verbos ('começou a falar'), pois verbos não admitem artigo feminino 'a'.",
    "explicacoes": [
      "Opção INCORRETA (Crase correta). O verbo prestar exige preposição e o termo feminino 'aluna' aceita artigo.",
      "Opção INCORRETA (Crase correta). O verbo 'ir' exige preposição ('fomos a') que se contrai com o artigo de 'escola'.",
      "Opção INCORRETA (Crase correta). O verbo 'referir-se' exige preposição 'a' que se contrai com o 'a' inicial de 'àqueles'.",
      "Opção CORRETA (Gabarito). A crase está incorreta porque 'falar' é verbo, inviabilizando o acento grave indicativo de crase.",
      "Opção INCORRETA (Crase correta). 'Às pressas' é locução adverbial feminina plural de modo, devendo receber crase (embora falte o 's' na grafia da alternativa)."
    ]
  },
  {
    "id": "q159",
    "cargo": "pedagogo",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 79 (Pedagogo) - Assinale a frase na qual a crase foi empregada incorretamente perante a norma gramatical culta:",
    "options": [
      "A pedagoga do campus prestou orientações à aluna do curso subsequente.",
      "Nós fomos à escola estadual participar da plenária comunitária.",
      "O diretor referiu-se àqueles relatórios pedagógicos na reunião.",
      "O palestrante começou à falar sobre inclusão escolar de forma dinâmica.",
      "As pressas, a coordenadora pedagógica organizou a sala de dinâmicas."
    ],
    "resposta": 3,
    "justificativa": "A crase é proibida antes de verbos ('começou a falar'), pois verbos não admitem artigo feminino 'a'.",
    "explicacoes": [
      "Opção INCORRETA (Crase correta). O verbo prestar exige preposição e o termo feminino 'aluna' aceita artigo.",
      "Opção INCORRETA (Crase correta). O verbo 'ir' exige preposição ('fomos a') que se contrai com o artigo de 'escola'.",
      "Opção INCORRETA (Crase correta). O verbo 'referir-se' exige preposição 'a' que se contrai com o 'a' inicial de 'àqueles'.",
      "Opção CORRETA (Gabarito). A crase está incorreta porque 'falar' é verbo, inviabilizando o acento grave indicativo de crase.",
      "Opção INCORRETA (Crase correta). 'Às pressas' é locução adverbial feminina plural de modo, devendo receber crase (embora falte o 's' na grafia da alternativa)."
    ]
  },
  {
    "id": "q160",
    "cargo": "pedagogo",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 80 (Pedagogo) - Assinale a frase na qual a crase foi empregada incorretamente perante a norma gramatical culta:",
    "options": [
      "A pedagoga do campus prestou orientações à aluna do curso subsequente.",
      "Nós fomos à escola estadual participar da plenária comunitária.",
      "O diretor referiu-se àqueles relatórios pedagógicos na reunião.",
      "O palestrante começou à falar sobre inclusão escolar de forma dinâmica.",
      "As pressas, a coordenadora pedagógica organizou a sala de dinâmicas."
    ],
    "resposta": 3,
    "justificativa": "A crase é proibida antes de verbos ('começou a falar'), pois verbos não admitem artigo feminino 'a'.",
    "explicacoes": [
      "Opção INCORRETA (Crase correta). O verbo prestar exige preposição e o termo feminino 'aluna' aceita artigo.",
      "Opção INCORRETA (Crase correta). O verbo 'ir' exige preposição ('fomos a') que se contrai com o artigo de 'escola'.",
      "Opção INCORRETA (Crase correta). O verbo 'referir-se' exige preposição 'a' que se contrai com o 'a' inicial de 'àqueles'.",
      "Opção CORRETA (Gabarito). A crase está incorreta porque 'falar' é verbo, inviabilizando o acento grave indicativo de crase.",
      "Opção INCORRETA (Crase correta). 'Às pressas' é locução adverbial feminina plural de modo, devendo receber crase (embora falte o 's' na grafia da alternativa)."
    ]
  },
  {
    "id": "q161",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 1 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q162",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 2 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q163",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 3 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q164",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 4 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q165",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 5 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q166",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 6 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q167",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 7 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q168",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 8 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q169",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 9 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q170",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 10 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q171",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 11 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q172",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 12 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q173",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 13 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q174",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 14 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q175",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 15 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q176",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 16 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q177",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 17 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q178",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 18 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q179",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 19 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q180",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 20 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q181",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 21 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q182",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 22 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q183",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 23 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q184",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 24 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q185",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 25 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q186",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 26 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q187",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 27 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q188",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 28 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q189",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 29 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q190",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Questão 30 (Assistente de Alunos) - Conforme as determinações do Estatuto da Criança e do Adolescente (ECA) sobre o direito à educação, é direito dos pais ou responsáveis legais:",
    "options": [
      "Isentar os filhos das avaliações formais e decidir sobre sua promoção escolar unilateralmente.",
      "Ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais da escola.",
      "Exigir tratamento diferenciado e exclusivo para seus filhos em relação aos demais alunos.",
      "Proibir o acesso dos filhos a conteúdos disciplinares que contrariem seus dogmas pessoais.",
      "Impedir a escola de notificar o Conselho Tutelar sobre casos de suspeita de maus-tratos."
    ],
    "resposta": 1,
    "justificativa": "O parágrafo único do art. 53 do ECA garante aos pais ou responsáveis o direito de ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
    "explicacoes": [
      "Opção INCORRETA. A avaliação e promoção seguem as normas do sistema de ensino da unidade escolar.",
      "Opção CORRETA. Esta garantia reforça o princípio da gestão participativa e a parceria família-escola contida no ECA.",
      "Opção INCORRETA. A igualdade de condições de acesso e permanência rechaça privilégios arbitrários a alunos específicos.",
      "Opção INCORRETA. As diretrizes curriculares nacionais são de observância obrigatória por força de lei federal.",
      "Opção INCORRETA. Os profissionais da educação têm o dever legal de notificar casos suspeitos de maus-tratos (Art. 56, I)."
    ]
  },
  {
    "id": "q191",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 31 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q192",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 32 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q193",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 33 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q194",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 34 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q195",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 35 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q196",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 36 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q197",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 37 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q198",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 38 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q199",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 39 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q200",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 40 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q201",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 41 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q202",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 42 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q203",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 43 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q204",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 44 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q205",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 45 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q206",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 46 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q207",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 47 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q208",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 48 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q209",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 49 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q210",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 50 (Assistente de Alunos) - No contexto da Comunicação Não-Violenta (CNV), proposta por Marshall Rosenberg, para resolver conflitos de convivência entre estudantes, o profissional deve priorizar:",
    "options": [
      "Identificar culpados e aplicar advertências formais imediatamente para intimidá-los.",
      "Ignorar as brigas, pois conflitos juvenis se resolvem sozinhos com o tempo.",
      "Praticar a escuta ativa, identificando os fatos observados, sentimentos, necessidades e formulando pedidos claros.",
      "Tomar o partido do aluno que aparenta ser mais fraco e repreender severamente o outro.",
      "Expulsar os envolvidos da escola para manter o ambiente pacífico de forma rápida."
    ],
    "resposta": 2,
    "justificativa": "A CNV baseia-se em quatro componentes: Observação (fatos), Sentimento, Necessidade e Pedido, promovendo empatia e resolução de conflitos por vias dialógicas.",
    "explicacoes": [
      "Opção INCORRETA. A abordagem puramente punitiva foca em culpa, indo de encontro aos princípios integradores da CNV.",
      "Opção INCORRETA. A omissão compromete a segurança escolar e pode agravar situações de bullying sistemático.",
      "Opção CORRETA. Representa com precisão a base conceitual da Comunicação Não-Violenta de Marshall Rosenberg.",
      "Opção INCORRETA. A imparcialidade e a escuta mútua são fundamentais. Tomar partidos arbitrários impede a resolução real.",
      "Opção INCORRETA. Medidas extremas violam o direito de permanência na escola e devem ser último recurso disciplinar legal."
    ]
  },
  {
    "id": "q211",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 51 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q212",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 52 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q213",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 53 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q214",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 54 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q215",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 55 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q216",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 56 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q217",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 57 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q218",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 58 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q219",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 59 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q220",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 60 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q221",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 61 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q222",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 62 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q223",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 63 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q224",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 64 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q225",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 65 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q226",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 66 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q227",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 67 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q228",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 68 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q229",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 69 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q230",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos",
    "enunciado": "Questão 70 (Assistente de Alunos) - Em casos de obstrução de vias aéreas por corpo estranho (engasgo) em um aluno adolescente consciente, a manobra de primeiros socorros indicada chama-se:",
    "options": [
      "Manobra de Valsalva",
      "Manobra de Heimlich",
      "Reanimação Cardiopulmonar (RCP)",
      "Posição Lateral de Segurança",
      "Compressão Torácica Direta"
    ],
    "resposta": 1,
    "justificativa": "A Manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para expulsar o corpo estranho das vias aéreas do sujeito consciente.",
    "explicacoes": [
      "Opção INCORRETA. A manobra de Valsalva serve para testar funções cardíacas ou desobstruir ouvidos, não para engasgo.",
      "Opção CORRETA. É a manobra padrão mundial em primeiros socorros para casos de asfixia por engasgo em sujeitos conscientes.",
      "Opção INCORRETA. A RCP é indicada apenas para vítimas inconscientes que não apresentam respiração nem pulso (parada).",
      "Opção INCORRETA. A posição lateral serve para manter a via aérea aberta em vítimas inconscientes que respiram.",
      "Opção INCORRETA. A compressão torácica direta (sem ar) em adolescente consciente não é o método indicado para engasgo comum."
    ]
  },
  {
    "id": "q231",
    "cargo": "assistente_alunos",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 71 (Assistente de Alunos) - Assinale a alternativa cuja concordância nominal obedece estritamente à norma gramatical padrão:",
    "options": [
      "Seguem anexo as fotos da assembleia estudantil do grêmio.",
      "A coordenadora declarou que é proibido a entrada de estranhos.",
      "Os estudantes mesmos organizaram a campanha de doação de livros.",
      "As funcionárias da portaria ficaram meia assustadas com o barulho.",
      "Nesta escola de tempo integral, há menas chances de evasão."
    ],
    "resposta": 2,
    "justificativa": "O pronome demonstrativo reflexivo 'mesmos' concorda em gênero e número com o sujeito 'Os estudantes'. Portanto, 'Os estudantes mesmos organizaram' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O adjetivo anexo deve concordar com o substantivo ('Seguem anexas as fotos').",
      "Opção INCORRETA. Havendo o artigo 'a' determinando o sujeito feminino, a concordância é obrigatória ('é proibida a entrada').",
      "Opção CORRETA. Concordância nominal perfeita do termo 'mesmos' concordando com o sujeito plural masculino.",
      "Opção INCORRETA. O advérbio 'meio' denotando intensidade é invariável ('ficaram meio assustadas').",
      "Opção INCORRETA. A palavra 'menos' é invariável na língua portuguesa; o termo 'menas' não existe na norma culta."
    ]
  },
  {
    "id": "q232",
    "cargo": "assistente_alunos",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 72 (Assistente de Alunos) - Assinale a alternativa cuja concordância nominal obedece estritamente à norma gramatical padrão:",
    "options": [
      "Seguem anexo as fotos da assembleia estudantil do grêmio.",
      "A coordenadora declarou que é proibido a entrada de estranhos.",
      "Os estudantes mesmos organizaram a campanha de doação de livros.",
      "As funcionárias da portaria ficaram meia assustadas com o barulho.",
      "Nesta escola de tempo integral, há menas chances de evasão."
    ],
    "resposta": 2,
    "justificativa": "O pronome demonstrativo reflexivo 'mesmos' concorda em gênero e número com o sujeito 'Os estudantes'. Portanto, 'Os estudantes mesmos organizaram' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O adjetivo anexo deve concordar com o substantivo ('Seguem anexas as fotos').",
      "Opção INCORRETA. Havendo o artigo 'a' determinando o sujeito feminino, a concordância é obrigatória ('é proibida a entrada').",
      "Opção CORRETA. Concordância nominal perfeita do termo 'mesmos' concordando com o sujeito plural masculino.",
      "Opção INCORRETA. O advérbio 'meio' denotando intensidade é invariável ('ficaram meio assustadas').",
      "Opção INCORRETA. A palavra 'menos' é invariável na língua portuguesa; o termo 'menas' não existe na norma culta."
    ]
  },
  {
    "id": "q233",
    "cargo": "assistente_alunos",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 73 (Assistente de Alunos) - Assinale a alternativa cuja concordância nominal obedece estritamente à norma gramatical padrão:",
    "options": [
      "Seguem anexo as fotos da assembleia estudantil do grêmio.",
      "A coordenadora declarou que é proibido a entrada de estranhos.",
      "Os estudantes mesmos organizaram a campanha de doação de livros.",
      "As funcionárias da portaria ficaram meia assustadas com o barulho.",
      "Nesta escola de tempo integral, há menas chances de evasão."
    ],
    "resposta": 2,
    "justificativa": "O pronome demonstrativo reflexivo 'mesmos' concorda em gênero e número com o sujeito 'Os estudantes'. Portanto, 'Os estudantes mesmos organizaram' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O adjetivo anexo deve concordar com o substantivo ('Seguem anexas as fotos').",
      "Opção INCORRETA. Havendo o artigo 'a' determinando o sujeito feminino, a concordância é obrigatória ('é proibida a entrada').",
      "Opção CORRETA. Concordância nominal perfeita do termo 'mesmos' concordando com o sujeito plural masculino.",
      "Opção INCORRETA. O advérbio 'meio' denotando intensidade é invariável ('ficaram meio assustadas').",
      "Opção INCORRETA. A palavra 'menos' é invariável na língua portuguesa; o termo 'menas' não existe na norma culta."
    ]
  },
  {
    "id": "q234",
    "cargo": "assistente_alunos",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 74 (Assistente de Alunos) - Assinale a alternativa cuja concordância nominal obedece estritamente à norma gramatical padrão:",
    "options": [
      "Seguem anexo as fotos da assembleia estudantil do grêmio.",
      "A coordenadora declarou que é proibido a entrada de estranhos.",
      "Os estudantes mesmos organizaram a campanha de doação de livros.",
      "As funcionárias da portaria ficaram meia assustadas com o barulho.",
      "Nesta escola de tempo integral, há menas chances de evasão."
    ],
    "resposta": 2,
    "justificativa": "O pronome demonstrativo reflexivo 'mesmos' concorda em gênero e número com o sujeito 'Os estudantes'. Portanto, 'Os estudantes mesmos organizaram' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O adjetivo anexo deve concordar com o substantivo ('Seguem anexas as fotos').",
      "Opção INCORRETA. Havendo o artigo 'a' determinando o sujeito feminino, a concordância é obrigatória ('é proibida a entrada').",
      "Opção CORRETA. Concordância nominal perfeita do termo 'mesmos' concordando com o sujeito plural masculino.",
      "Opção INCORRETA. O advérbio 'meio' denotando intensidade é invariável ('ficaram meio assustadas').",
      "Opção INCORRETA. A palavra 'menos' é invariável na língua portuguesa; o termo 'menas' não existe na norma culta."
    ]
  },
  {
    "id": "q235",
    "cargo": "assistente_alunos",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 75 (Assistente de Alunos) - Assinale a alternativa cuja concordância nominal obedece estritamente à norma gramatical padrão:",
    "options": [
      "Seguem anexo as fotos da assembleia estudantil do grêmio.",
      "A coordenadora declarou que é proibido a entrada de estranhos.",
      "Os estudantes mesmos organizaram a campanha de doação de livros.",
      "As funcionárias da portaria ficaram meia assustadas com o barulho.",
      "Nesta escola de tempo integral, há menas chances de evasão."
    ],
    "resposta": 2,
    "justificativa": "O pronome demonstrativo reflexivo 'mesmos' concorda em gênero e número com o sujeito 'Os estudantes'. Portanto, 'Os estudantes mesmos organizaram' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O adjetivo anexo deve concordar com o substantivo ('Seguem anexas as fotos').",
      "Opção INCORRETA. Havendo o artigo 'a' determinando o sujeito feminino, a concordância é obrigatória ('é proibida a entrada').",
      "Opção CORRETA. Concordância nominal perfeita do termo 'mesmos' concordando com o sujeito plural masculino.",
      "Opção INCORRETA. O advérbio 'meio' denotando intensidade é invariável ('ficaram meio assustadas').",
      "Opção INCORRETA. A palavra 'menos' é invariável na língua portuguesa; o termo 'menas' não existe na norma culta."
    ]
  },
  {
    "id": "q236",
    "cargo": "assistente_alunos",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 76 (Assistente de Alunos) - Assinale a alternativa cuja concordância nominal obedece estritamente à norma gramatical padrão:",
    "options": [
      "Seguem anexo as fotos da assembleia estudantil do grêmio.",
      "A coordenadora declarou que é proibido a entrada de estranhos.",
      "Os estudantes mesmos organizaram a campanha de doação de livros.",
      "As funcionárias da portaria ficaram meia assustadas com o barulho.",
      "Nesta escola de tempo integral, há menas chances de evasão."
    ],
    "resposta": 2,
    "justificativa": "O pronome demonstrativo reflexivo 'mesmos' concorda em gênero e número com o sujeito 'Os estudantes'. Portanto, 'Os estudantes mesmos organizaram' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O adjetivo anexo deve concordar com o substantivo ('Seguem anexas as fotos').",
      "Opção INCORRETA. Havendo o artigo 'a' determinando o sujeito feminino, a concordância é obrigatória ('é proibida a entrada').",
      "Opção CORRETA. Concordância nominal perfeita do termo 'mesmos' concordando com o sujeito plural masculino.",
      "Opção INCORRETA. O advérbio 'meio' denotando intensidade é invariável ('ficaram meio assustadas').",
      "Opção INCORRETA. A palavra 'menos' é invariável na língua portuguesa; o termo 'menas' não existe na norma culta."
    ]
  },
  {
    "id": "q237",
    "cargo": "assistente_alunos",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 77 (Assistente de Alunos) - Assinale a alternativa cuja concordância nominal obedece estritamente à norma gramatical padrão:",
    "options": [
      "Seguem anexo as fotos da assembleia estudantil do grêmio.",
      "A coordenadora declarou que é proibido a entrada de estranhos.",
      "Os estudantes mesmos organizaram a campanha de doação de livros.",
      "As funcionárias da portaria ficaram meia assustadas com o barulho.",
      "Nesta escola de tempo integral, há menas chances de evasão."
    ],
    "resposta": 2,
    "justificativa": "O pronome demonstrativo reflexivo 'mesmos' concorda em gênero e número com o sujeito 'Os estudantes'. Portanto, 'Os estudantes mesmos organizaram' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O adjetivo anexo deve concordar com o substantivo ('Seguem anexas as fotos').",
      "Opção INCORRETA. Havendo o artigo 'a' determinando o sujeito feminino, a concordância é obrigatória ('é proibida a entrada').",
      "Opção CORRETA. Concordância nominal perfeita do termo 'mesmos' concordando com o sujeito plural masculino.",
      "Opção INCORRETA. O advérbio 'meio' denotando intensidade é invariável ('ficaram meio assustadas').",
      "Opção INCORRETA. A palavra 'menos' é invariável na língua portuguesa; o termo 'menas' não existe na norma culta."
    ]
  },
  {
    "id": "q238",
    "cargo": "assistente_alunos",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 78 (Assistente de Alunos) - Assinale a alternativa cuja concordância nominal obedece estritamente à norma gramatical padrão:",
    "options": [
      "Seguem anexo as fotos da assembleia estudantil do grêmio.",
      "A coordenadora declarou que é proibido a entrada de estranhos.",
      "Os estudantes mesmos organizaram a campanha de doação de livros.",
      "As funcionárias da portaria ficaram meia assustadas com o barulho.",
      "Nesta escola de tempo integral, há menas chances de evasão."
    ],
    "resposta": 2,
    "justificativa": "O pronome demonstrativo reflexivo 'mesmos' concorda em gênero e número com o sujeito 'Os estudantes'. Portanto, 'Os estudantes mesmos organizaram' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O adjetivo anexo deve concordar com o substantivo ('Seguem anexas as fotos').",
      "Opção INCORRETA. Havendo o artigo 'a' determinando o sujeito feminino, a concordância é obrigatória ('é proibida a entrada').",
      "Opção CORRETA. Concordância nominal perfeita do termo 'mesmos' concordando com o sujeito plural masculino.",
      "Opção INCORRETA. O advérbio 'meio' denotando intensidade é invariável ('ficaram meio assustadas').",
      "Opção INCORRETA. A palavra 'menos' é invariável na língua portuguesa; o termo 'menas' não existe na norma culta."
    ]
  },
  {
    "id": "q239",
    "cargo": "assistente_alunos",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 79 (Assistente de Alunos) - Assinale a alternativa cuja concordância nominal obedece estritamente à norma gramatical padrão:",
    "options": [
      "Seguem anexo as fotos da assembleia estudantil do grêmio.",
      "A coordenadora declarou que é proibido a entrada de estranhos.",
      "Os estudantes mesmos organizaram a campanha de doação de livros.",
      "As funcionárias da portaria ficaram meia assustadas com o barulho.",
      "Nesta escola de tempo integral, há menas chances de evasão."
    ],
    "resposta": 2,
    "justificativa": "O pronome demonstrativo reflexivo 'mesmos' concorda em gênero e número com o sujeito 'Os estudantes'. Portanto, 'Os estudantes mesmos organizaram' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O adjetivo anexo deve concordar com o substantivo ('Seguem anexas as fotos').",
      "Opção INCORRETA. Havendo o artigo 'a' determinando o sujeito feminino, a concordância é obrigatória ('é proibida a entrada').",
      "Opção CORRETA. Concordância nominal perfeita do termo 'mesmos' concordando com o sujeito plural masculino.",
      "Opção INCORRETA. O advérbio 'meio' denotando intensidade é invariável ('ficaram meio assustadas').",
      "Opção INCORRETA. A palavra 'menos' é invariável na língua portuguesa; o termo 'menas' não existe na norma culta."
    ]
  },
  {
    "id": "q240",
    "cargo": "assistente_alunos",
    "materia": "Língua Portuguesa",
    "enunciado": "Questão 80 (Assistente de Alunos) - Assinale a alternativa cuja concordância nominal obedece estritamente à norma gramatical padrão:",
    "options": [
      "Seguem anexo as fotos da assembleia estudantil do grêmio.",
      "A coordenadora declarou que é proibido a entrada de estranhos.",
      "Os estudantes mesmos organizaram a campanha de doação de livros.",
      "As funcionárias da portaria ficaram meia assustadas com o barulho.",
      "Nesta escola de tempo integral, há menas chances de evasão."
    ],
    "resposta": 2,
    "justificativa": "O pronome demonstrativo reflexivo 'mesmos' concorda em gênero e número com o sujeito 'Os estudantes'. Portanto, 'Os estudantes mesmos organizaram' está correto.",
    "explicacoes": [
      "Opção INCORRETA. O adjetivo anexo deve concordar com o substantivo ('Seguem anexas as fotos').",
      "Opção INCORRETA. Havendo o artigo 'a' determinando o sujeito feminino, a concordância é obrigatória ('é proibida a entrada').",
      "Opção CORRETA. Concordância nominal perfeita do termo 'mesmos' concordando com o sujeito plural masculino.",
      "Opção INCORRETA. O advérbio 'meio' denotando intensidade é invariável ('ficaram meio assustadas').",
      "Opção INCORRETA. A palavra 'menos' é invariável na língua portuguesa; o termo 'menas' não existe na norma culta."
    ]
  }
];

// Default Mock Discursivas for Offline/GitHub Pages support
let discursivaCases = [
  {
    "id": "d1",
    "cargo": "tecnico_assuntos_educacionais",
    "titulo": "Estudo de Caso — EPT e Inclusão",
    "contexto": "Um docente de um curso técnico integrado de Informática do IF Baiano procura a equipe de assuntos educacionais relatando dificuldades para incluir um estudante com deficiência visual (cegueira) em suas aulas práticas de desenvolvimento web. O docente afirma que as ferramentas de programação utilizadas não são acessíveis e que o estudante está ficando atrasado em relação à turma, apresentando desmotivação e risco de evasão.",
    "pergunta": "Com base na legislação educacional (LDB e Estatuto da Pessoa com Deficiência) e nas teorias pedagógicas de mediação e inclusão, formule uma proposta de intervenção pedagógica que contemple: 1) Ações imediatas de adaptação curricular e acessibilidade tecnológica; 2) Orientação pedagógica ao docente; 3) Acompanhamento do estudante para evitar a evasão.",
    "criterios": [
      "Referência legal à inclusão escolar (Lei 13.146/2015 e LDB Art. 59)",
      "Proposição de tecnologias assistivas específicas (leitores de tela, editores de código acessíveis)",
      "Ações de mediação pedagógica em colaboração docente-TAE",
      "Estratégias de acolhimento e suporte psicoemocional para evitar a evasão"
    ],
    "resposta_modelo": "Uma resposta exemplar deve indicar a necessidade imediata de articular o Núcleo de Apoio às Pessoas com Necessidades Educacionais Específicas (NAPNE). Deve propor a adaptação dos materiais didáticos (uso de leitores de tela como NVDA/DOSVOX e editores como VS Code com extensões de acessibilidade), formação continuada em serviço para o docente com base no Desenho Universal para a Aprendizagem (DUA), e implementação de monitoria ou tutoria de pares (aprendizagem colaborativa de Vygotsky) para promover a inclusão e pertencimento do estudante, mitigando a evasão sob a égide do direito à educação integral."
  },
  {
    "id": "d2",
    "cargo": "pedagogo",
    "titulo": "Estudo de Caso — Integração Curricular na EPT",
    "contexto": "Durante a elaboração do Projeto Político-Pedagógico (PPP) de um campus do IFBA, surge um debate acalorado entre a equipe técnica e os professores de disciplinas propedêuticas (História, Geografia, Português) e técnicas (Mecânica, Edificações). Os professores técnicos defendem que o currículo deve focar estritamente nas competências operacionais exigidas pelo mercado de trabalho, enquanto os professores do núcleo comum demandam maior espaço para reflexão crítica e formação humanística.",
    "pergunta": "Como Pedagogo(a), disserte sobre o conceito de 'Trabalho como Princípio Educativo' e 'Integração Curricular' na Educação Profissional e Tecnológica (EPT). Apresente uma estratégia de mediação pedagógica para integrar os dois núcleos (técnico e geral) no PPP, superando a dicotomia entre trabalho manual e trabalho intelectual.",
    "criterios": [
      "Fundamentação teórica do Trabalho como Princípio Educativo (Saviani, Ramos, Frigotto)",
      "Definição de Educação Integral e travessia da divisão histórica das classes",
      "Proposição de projetos integradores ou currículos temáticos unificados",
      "Papel do pedagogo na articulação das reuniões de planejamento coletivo"
    ],
    "resposta_modelo": "O pedagogo deve fundamentar a discussão teórica nos conceitos de omnilateralidade e politecnia, demonstrando que o trabalho não é apenas adestramento para o mercado, mas princípio ontológico de produção da existência humana. Deve-se propor a superação da dualidade educativa por meio de Projetos Integradores de caráter interdisciplinar que unam, por exemplo, a análise histórica das revoluções industriais à aplicação prática de mecânica ou edificações, reestruturando o PPP para que os eixos de Ciência, Cultura, Trabalho e Tecnologia atravessem transversalmente todas as disciplinas pedagógicas."
  },
  {
    "id": "d3",
    "cargo": "assistente_alunos",
    "titulo": "Estudo de Caso — Conflito e Mediação Escolar",
    "contexto": "Um Assistente de Alunos do IF Baiano flagra, no pátio do campus durante o intervalo, dois estudantes do ensino médio integrado em uma discussão verbal agressiva que está prestes a evoluir para agressão física. A briga foi motivada por ofensas e boatos difamatórios espalhados por meio de um grupo de mensagens em redes sociais (cyberbullying). Vários outros estudantes estão ao redor incentivando o conflito e gravando com celulares.",
    "pergunta": "Considerando o papel do Assistente de Alunos na garantia da convivência escolar harmoniosa e as diretrizes do ECA (Estatuto da Criança e do Adolescente), descreva: 1) A intervenção imediata para conter a briga física; 2) Os procedimentos administrativos e pedagógicos a serem adotados na sequência; 3) Ações preventivas a serem propostas para mitigar o cyberbullying e a cultura de violência na escola.",
    "criterios": [
      "Abordagem segura e mediação verbal imediata para separação sem uso de força física desmedida",
      "Acolhimento individualizado dos envolvidos em ambiente reservado",
      "Encaminhamento à equipe pedagógica/assistência estudantil e registro formal do ocorrido",
      "Proposição de projetos de conscientização de cidadania digital e empatia (ECA Art. 53 e 70)"
    ],
    "resposta_modelo": "O assistente de alunos deve intervir imediatamente de forma firme, porém calma, posicionando-se verbalmente e dispersando os espectadores. Deve conduzir os dois estudantes envolvidos a salas separadas para acalmar os ânimos, ouvindo as versões de forma individualizada sem julgamentos imediatos. O ocorrido deve ser formalmente registrado no sistema de ocorrências do campus e encaminhado à Coordenação Pedagógica. A longo prazo, o profissional deve propor à equipe pedagógica a realização de rodas de conversa e oficinas de Justiça Restaurativa e Letramento Digital, visando conscientizar sobre os limites éticos na internet e combater o cyberbullying sob o amparo do ECA."
  }
];

// Study topics for each cargo (LDB, 8.112/90, EPT, ECA, and specific educational guidelines)
const CHECKLISTS = {
    tecnico_assuntos_educacionais: [
        {
            titulo: "Língua Portuguesa (Básico)",
            itens: [
                { id: "tae_lp_1", texto: "Compreensão e interpretação de textos de gêneros variados." },
                { id: "tae_lp_2", texto: "Coesão e coerência textual; mecanismos de referenciação e articulação." },
                { id: "tae_lp_3", texto: "Ortografia oficial, acentuação gráfica e emprego do sinal indicador de crase." },
                { id: "tae_lp_4", texto: "Sintaxe da oração e do período; concordância nominal e verbal; regência." }
            ]
        },
        {
            titulo: "Legislação do Serviço Público Federal",
            itens: [
                { id: "tae_leg_1", texto: "Lei nº 8.112/1990 - Regime Jurídico Único (Provimento, Direitos, Deveres e Regime Disciplinar)." },
                { id: "tae_leg_2", texto: "Lei nº 9.784/1999 - Processo Administrativo Federal." },
                { id: "tae_leg_3", texto: "Lei nº 11.091/2005 - Plano de Carreira dos Cargos de Técnico-Administrativos em Educação (PCCTAE)." },
                { id: "tae_leg_4", texto: "Lei nº 11.892/2008 - Criação da Rede Federal de Educação Profissional, Científica e Tecnológica." },
                { id: "tae_leg_5", texto: "Decreto nº 1.171/1994 - Código de Ética Profissional do Servidor Público Civil Federal." }
            ]
        },
        {
            titulo: "Conhecimentos Específicos (Pedagogia e EPT)",
            itens: [
                { id: "tae_esp_1", texto: "Lei nº 9.394/1996 - Lei de Diretrizes e Bases da Educação Nacional (LDB)." },
                { id: "tae_esp_2", texto: "Teorias da Aprendizagem e do Desenvolvimento (Piaget, Vygotsky, Wallon) aplicadas à prática pedagógica." },
                { id: "tae_esp_3", texto: "Planejamento Educacional: concepções, níveis (plano de ensino, plano de aula) e etapas." },
                { id: "tae_esp_4", texto: "Avaliação da Aprendizagem: diagnóstica, formativa e somativa." },
                { id: "tae_esp_5", texto: "Projeto Político-Pedagógico (PPP): concepções, elaboração, acompanhamento e avaliação coletiva." },
                { id: "tae_esp_6", texto: "Educação Profissional e Tecnológica (EPT): bases conceituais, histórico e a integração curricular com o Ensino Médio." },
                { id: "tae_esp_7", texto: "Diretrizes Curriculares Nacionais para a Educação Profissional Técnica de Nível Médio." }
            ]
        }
    ],
    pedagogo: [
        {
            titulo: "Língua Portuguesa (Básico)",
            itens: [
                { id: "ped_lp_1", texto: "Compreensão e interpretação de textos literários e não literários." },
                { id: "ped_lp_2", texto: "Tipologia textual e gêneros discursivos." },
                { id: "ped_lp_3", texto: "Semântica: sinonímia, antonímia, ambiguidade." },
                { id: "ped_lp_4", texto: "Emprego de tempos e modos verbais." }
            ]
        },
        {
            titulo: "Legislação do Serviço Público Federal",
            itens: [
                { id: "ped_leg_1", texto: "Lei nº 8.112/1990 - Regime Jurídico Único." },
                { id: "ped_leg_2", texto: "Lei nº 9.784/1999 - Processo Administrativo Federal." },
                { id: "ped_leg_3", texto: "Lei nº 11.892/2008 - Criação dos Institutos Federais." },
                { id: "ped_leg_4", texto: "Decreto nº 1.171/1994 - Código de Ética." }
            ]
        },
        {
            titulo: "Conhecimentos Específicos (Gestão Pedagógica)",
            itens: [
                { id: "ped_esp_1", texto: "História das Ideias Pedagógicas no Brasil; tendências pedagógicas liberais e progressistas." },
                { id: "ped_esp_2", texto: "Gestão Democrática e Coordenação Pedagógica: o papel do Pedagogo na articulação docente." },
                { id: "ped_esp_3", texto: "Supervisão e Orientação Educacional: fundamentos e práticas mediadoras." },
                { id: "ped_esp_4", texto: "Currículo Escolar: teorias tradicionais, críticas e pós-críticas; a BNCC." },
                { id: "ped_esp_5", texto: "Educação Especial na perspectiva da Educação Inclusiva (Lei nº 13.146/2015)." },
                { id: "ped_esp_6", texto: "Formação Continuada de Professores em Serviço: concepções e estratégias de oficinas pedagógicas." },
                { id: "ped_esp_7", texto: "Educação de Jovens e Adultos (EJA) e a articulação com a EPT." }
            ]
        }
    ],
    assistente_alunos: [
        {
            titulo: "Língua Portuguesa (Básico)",
            itens: [
                { id: "aa_lp_1", texto: "Leitura, compreensão e interpretação de textos." },
                { id: "aa_lp_2", texto: "Pontuação e concordância simples." },
                { id: "aa_lp_3", texto: "Significação das palavras: sinônimos e antônimos." }
            ]
        },
        {
            titulo: "Legislação do Serviço Público Federal",
            itens: [
                { id: "aa_leg_1", texto: "Lei nº 8.112/1990 - RJU (Regime Disciplinar e Deveres)." },
                { id: "aa_leg_2", texto: "Lei nº 11.892/2008 - Criação dos Institutos Federais." },
                { id: "aa_leg_3", texto: "Decreto nº 1.171/1994 - Código de Ética." }
            ]
        },
        {
            titulo: "Conhecimentos Específicos (Convivência Escolar)",
            itens: [
                { id: "aa_esp_1", texto: "Lei nº 8.069/1990 - Estatuto da Criança e do Adolescente (ECA)." },
                { id: "aa_esp_2", texto: "Noções de Psicologia do Desenvolvimento e da Adolescência." },
                { id: "aa_esp_3", texto: "Mediação de Conflitos e Comunicação Não-Violenta (CNV) em ambiente escolar." },
                { id: "aa_esp_4", texto: "Prevenção ao Bullying e Cyberbullying no cotidiano escolar." },
                { id: "aa_esp_5", texto: "Noções de Primeiros Socorros e Segurança Escolar (Lei Lucas - Lei nº 13.722/2018)." },
                { id: "aa_esp_6", texto: "Relações Interpessoais, Ética no serviço público e atendimento ao estudante." }
            ]
        }
    ]
};

// --- 2. INITIALIZATION --------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initCargoSelection();
    initAccessibility();
    initSimuladoTabs();
    
    // Initial fetch from backend
    loadAllData();
    
    // Render career table
    renderCarreiraTable();
});

// Load progress, questions, discursivas, and files
function loadAllData() {
    // 1. Fetch Local Files
    fetch("/api/files")
        .then(res => res.json())
        .then(data => {
            localFiles = data;
            renderBibliotecaFiles();
        })
        .catch(err => {
            console.log("Running in static/serverless mode. Loading fallback mock files.", err);
            renderBibliotecaFiles(); // Load default view
        });

    // 2. Fetch Questions
    fetch("/api/questions")
        .then(res => res.json())
        .then(data => {
            if (data && Array.isArray(data) && data.length > 0) {
                quizQuestions = data;
            }
        })
        .catch(err => console.log("Failed to load questions. Using default fallback questions.", err));

    // 3. Fetch Discursivas
    fetch("/api/discursivas")
        .then(res => res.json())
        .then(data => {
            if (data && Array.isArray(data) && data.length > 0) {
                discursivaCases = data;
            }
            renderDiscursivas();
        })
        .catch(err => {
            console.log("Failed to load discursivas. Using default fallback discursivas.", err);
            renderDiscursivas();
        });

    // 4. Fetch Progress from backend or localStorage
    fetch("/api/progress")
        .then(res => res.json())
        .then(data => {
            checkedItems = data[currentCargo]?.checked || [];
            renderChecklist();
        })
        .catch(err => {
            // LocalStorage Fallback
            const saved = localStorage.getItem(`progress_${currentCargo}`);
            checkedItems = saved ? JSON.parse(saved) : [];
            renderChecklist();
        });
        
    updateCountdown();
}

// Countdown to a estimated exam date (e.g. 150 days from now)
function updateCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 120); // 120 days from now
    
    const diffTime = Math.abs(targetDate - new Date());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    document.getElementById("countdown-days").textContent = diffDays;
}

// --- 3. NAVIGATION -----------------------------------------
function initNavigation() {
    document.querySelectorAll(".nav-item").forEach(button => {
        button.addEventListener("click", () => {
            const tabName = button.dataset.tab;
            switchTab(tabName);
        });
    });
}

function switchTab(tabName) {
    currentTab = tabName;
    
    // Toggle active sidebar link
    document.querySelectorAll(".nav-item").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.tab === tabName);
    });

    // Toggle tab panels
    document.querySelectorAll(".tab-panel").forEach(panel => {
        panel.classList.toggle("active", panel.id === `tab-${tabName}`);
    });
    
    if (tabName === "dashboard" || tabName === "trilhas") {
        updateProgressUI();
    }
}

// --- 4. CARGO SELECTOR ------------------------------------
function initCargoSelection() {
    const selector = document.getElementById("select-cargo-global");
    selector.addEventListener("change", (e) => {
        currentCargo = e.target.value;
        showToast(`Foco alterado para: ${selector.options[selector.selectedIndex].text}`);
        
        // Reload specific progress & render
        fetch("/api/progress")
            .then(res => res.json())
            .then(data => {
                checkedItems = data[currentCargo]?.checked || [];
                renderChecklist();
                resetQuiz();
                renderDiscursivas();
            })
            .catch(err => {
                const saved = localStorage.getItem(`progress_${currentCargo}`);
                checkedItems = saved ? JSON.parse(saved) : [];
                renderChecklist();
                resetQuiz();
                renderDiscursivas();
            });
    });
}

// --- 5. CHECKLIST RENDER & LOGIC -------------------------
function renderChecklist() {
    const root = document.getElementById("checklists-root");
    root.innerHTML = "";
    
    const sections = CHECKLISTS[currentCargo] || [];
    
    sections.forEach((sec, secIdx) => {
        const card = document.createElement("div");
        card.className = "trilha-section-card";
        card.id = `sec-card-${secIdx}`;
        
        const header = document.createElement("div");
        header.className = "trilha-section-header";
        
        const title = document.createElement("h3");
        title.innerHTML = `<i class="fa-solid fa-folder-open"></i> ${sec.titulo}`;
        header.appendChild(title);
        
        const indicator = document.createElement("div");
        indicator.className = "section-indicator";
        indicator.innerHTML = `<span id="sec-count-${secIdx}">0/0</span> <i class="fa-solid fa-chevron-down"></i>`;
        header.appendChild(indicator);
        
        const body = document.createElement("div");
        body.className = "trilha-section-body";
        
        // Add items
        let secChecked = 0;
        sec.itens.forEach(item => {
            const isChecked = checkedItems.includes(item.id);
            if (isChecked) secChecked++;
            
            const itemDiv = document.createElement("div");
            itemDiv.className = `checklist-item ${isChecked ? "checked" : ""}`;
            itemDiv.dataset.id = item.id;
            
            itemDiv.innerHTML = `
                <div class="checklist-checkbox-wrapper">
                    <input type="checkbox" id="cb-${item.id}" ${isChecked ? "checked" : ""}>
                    <div class="checkbox-custom">
                        <i class="fa-solid fa-check"></i>
                    </div>
                </div>
                <span class="checklist-item-text">${item.texto}</span>
            `;
            
            // Toggle item click
            itemDiv.addEventListener("click", (e) => {
                e.preventDefault();
                toggleChecklistItem(item.id);
            });
            
            body.appendChild(itemDiv);
        });
        
        indicator.querySelector("span").textContent = `${secChecked}/${sec.itens.length}`;
        
        // Collapse toggle
        header.addEventListener("click", () => {
            card.classList.toggle("collapsed");
        });
        
        card.appendChild(header);
        card.appendChild(body);
        root.appendChild(card);
    });

    // MARK / UNMARK buttons
    document.getElementById("btn-check-all").onclick = () => setAllChecks(true);
    document.getElementById("btn-uncheck-all").onclick = () => setAllChecks(false);

    updateProgressUI();
}

function toggleChecklistItem(id) {
    const idx = checkedItems.indexOf(id);
    if (idx > -1) {
        checkedItems.splice(idx, 1);
    } else {
        checkedItems.push(id);
    }
    
    // Save state
    saveProgressState();
    renderChecklist();
}

function setAllChecks(val) {
    const list = CHECKLISTS[currentCargo] || [];
    checkedItems = [];
    if (val) {
        list.forEach(sec => {
            sec.itens.forEach(item => {
                checkedItems.push(item.id);
            });
        });
    }
    
    saveProgressState();
    renderChecklist();
    showToast(val ? "Todos os tópicos marcados." : "Todos os tópicos desmarcados.");
}

function saveProgressState() {
    // 1. Save to local storage
    localStorage.setItem(`progress_${currentCargo}`, JSON.stringify(checkedItems));
    
    // 2. Save to backend (Flask server)
    const payload = {};
    payload[currentCargo] = { "checked": checkedItems };
    
    fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .catch(err => console.log("Offline mode - Saved locally to browser storage.", err));
}

function updateProgressUI() {
    const list = CHECKLISTS[currentCargo] || [];
    let total = 0;
    let checked = 0;
    
    list.forEach(sec => {
        sec.itens.forEach(item => {
            total++;
            if (checkedItems.includes(item.id)) checked++;
        });
    });
    
    const pct = total > 0 ? Math.round((checked / total) * 100) : 0;
    
    // Update Trilha Panel Progress
    const fillTrilha = document.getElementById("trilha-progress-fill");
    const txtTrilha = document.getElementById("trilha-progress-text");
    if (fillTrilha) fillTrilha.style.width = pct + "%";
    if (txtTrilha) txtTrilha.textContent = `${checked} / ${total} concluídos (${pct}%)`;
    
    // Update Dashboard Progress
    const fillDash = document.getElementById("dashboard-progress-fill");
    const txtDashPct = document.getElementById("dashboard-progress-pct");
    const txtDashChecked = document.getElementById("dashboard-checked-count");
    const txtDashTotal = document.getElementById("dashboard-total-count");
    
    if (fillDash) fillDash.style.width = pct + "%";
    if (txtDashPct) txtDashPct.textContent = pct + "%";
    if (txtDashChecked) txtDashChecked.textContent = checked;
    if (txtDashTotal) txtDashTotal.textContent = total;
}

// --- 6. SIMULADOS - OBJETIVAS & QUIZ ----------------------
function initSimuladoTabs() {
    document.querySelectorAll(".sim-nav-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".sim-nav-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".subtab-panel").forEach(p => p.classList.remove("active"));
            
            btn.classList.add("active");
            document.getElementById(`subtab-${btn.dataset.subtab}`).classList.add("active");
        });
    });
    
    // Start Quiz
    document.getElementById("btn-start-quiz").onclick = startQuiz;
    document.getElementById("btn-submit-answer").onclick = submitQuizAnswer;
    document.getElementById("btn-next-question").onclick = nextQuizQuestion;
}

function startQuiz() {
    const filter = document.getElementById("quiz-subject-filter").value;
    
    // Filter questions by cargo and subject
    let filtered = quizQuestions.filter(q => q.cargo === currentCargo);
    if (filter !== "todos") {
        filtered = filtered.filter(q => q.materia === filter);
    }
    
    if (filtered.length === 0) {
        showToast("Nenhuma questão disponível para este filtro.");
        return;
    }
    
    // Shuffle and load
    quizQuestionsSubset = filtered.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    
    document.getElementById("quiz-setup").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    
    loadQuizQuestion();
}

function loadQuizQuestion() {
    const q = quizQuestionsSubset[currentQuestionIndex];
    
    document.getElementById("quiz-materia-badge").textContent = q.materia;
    document.getElementById("quiz-question-counter").textContent = `Questão ${currentQuestionIndex + 1}/${quizQuestionsSubset.length}`;
    document.getElementById("quiz-question-text").textContent = q.enunciado;
    
    const optionsContainer = document.getElementById("quiz-options-container");
    optionsContainer.innerHTML = "";
    selectedOptionIndex = null;
    
    q.options.forEach((opt, idx) => {
        const optDiv = document.createElement("div");
        optDiv.className = "quiz-option";
        optDiv.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + idx)}</div>
            <div class="option-text">${opt}</div>
        `;
        
        optDiv.onclick = () => selectQuizOption(idx, optDiv);
        optionsContainer.appendChild(optDiv);
    });
    
    // Clear feedback and buttons
    document.getElementById("quiz-feedback-box").classList.add("hidden");
    document.getElementById("btn-submit-answer").classList.remove("hidden");
    document.getElementById("btn-next-question").classList.add("hidden");
}

function selectQuizOption(idx, element) {
    if (document.getElementById("btn-submit-answer").classList.contains("hidden")) {
        return; // Answer already submitted
    }
    
    selectedOptionIndex = idx;
    document.querySelectorAll(".quiz-option").forEach(el => el.classList.remove("selected"));
    element.classList.add("selected");
}

function submitQuizAnswer() {
    if (selectedOptionIndex === null) {
        showToast("Selecione uma alternativa antes de responder.");
        return;
    }
    
    const q = quizQuestionsSubset[currentQuestionIndex];
    const options = document.querySelectorAll(".quiz-option");
    
    // Show correct / incorrect colors
    options.forEach((el, idx) => {
        el.classList.remove("selected");
        if (idx === q.resposta) {
            el.classList.add("correct");
        } else if (idx === selectedOptionIndex) {
            el.classList.add("incorrect");
        }
    });
    
    const feedbackBox = document.getElementById("quiz-feedback-box");
    const feedbackTitle = document.getElementById("quiz-feedback-title");
    const feedbackText = document.getElementById("quiz-feedback-text");
    
    feedbackBox.classList.remove("hidden");
    if (selectedOptionIndex === q.resposta) {
        feedbackTitle.textContent = "Correto! 🎉";
        feedbackTitle.style.color = "var(--green-500)";
        feedbackBox.style.borderLeftColor = "var(--green-600)";
    } else {
        feedbackTitle.textContent = "Incorreto. ❌";
        feedbackTitle.style.color = "var(--red-600)";
        feedbackBox.style.borderLeftColor = "var(--red-600)";
    }
    
    // Render general justification and detailed analysis
    let htmlContent = `<p style="margin-bottom: 15px; font-weight: 500;">${q.justificativa}</p>`;
    
    if (q.explicacoes && Array.isArray(q.explicacoes) && q.explicacoes.length === q.options.length) {
        htmlContent += `<div class="quiz-detailed-explanations">
            <h5>Análise das Alternativas:</h5>
            <ul class="explanation-list">`;
        q.options.forEach((opt, idx) => {
            const isCorrect = idx === q.resposta;
            const badgeClass = isCorrect ? "correct-badge" : "incorrect-badge";
            const badgeText = isCorrect ? "CORRETA" : "INCORRETA";
            htmlContent += `
                <li class="explanation-item">
                    <strong class="${badgeClass}">${String.fromCharCode(65 + idx)}) ${badgeText}:</strong>
                    <span>${q.explicacoes[idx]}</span>
                </li>
            `;
        });
        htmlContent += `</ul></div>`;
    }
    feedbackText.innerHTML = htmlContent;
    
    document.getElementById("btn-submit-answer").classList.add("hidden");
    document.getElementById("btn-next-question").classList.remove("hidden");
}

function nextQuizQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestionsSubset.length) {
        loadQuizQuestion();
    } else {
        // End of Quiz
        showToast("Você concluiu o simulado!");
        resetQuiz();
    }
}

function resetQuiz() {
    document.getElementById("quiz-setup").classList.remove("hidden");
    document.getElementById("quiz-container").classList.add("hidden");
}

// --- 7. SIMULADOS - DISCURSIVAS ---------------------------
function renderDiscursivas() {
    const root = document.getElementById("discursivas-root");
    root.innerHTML = "";
    
    const filtered = discursivaCases.filter(c => c.cargo === currentCargo);
    
    if (filtered.length === 0) {
        root.innerHTML = `
            <div class="no-files-card">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <h4>Nenhum estudo de caso discursivo disponível</h4>
                <p>Mude o cargo no menu superior ou adicione casos no arquivo discursivas.json para visualizá-los aqui.</p>
            </div>
        `;
        return;
    }
    
    filtered.forEach(c => {
        const card = document.createElement("div");
        card.className = "discursiva-card";
        card.innerHTML = `
            <h3>${c.titulo}</h3>
            <p class="case-context">${c.contexto}</p>
            <div class="case-question-box">
                <h4><i class="fa-solid fa-circle-question"></i> Enunciado / Questão</h4>
                <p>${c.pergunta}</p>
            </div>
            <div class="case-criteria">
                <h4>Critérios de Avaliação e Chaves</h4>
                <ul>
                    ${c.criterios.map(cr => `<li>${cr}</li>`).join("")}
                </ul>
            </div>
            <button class="btn btn-secondary btn-show-response" id="btn-show-${c.id}">
                <i class="fa-solid fa-eye"></i> Revelar Resposta Padrão
            </button>
            <div class="model-response-box hidden" id="box-resp-${c.id}">
                <strong>Gabarito Comentado / Padrão de Resposta:</strong>
                <p>${c.resposta_modelo}</p>
            </div>
        `;
        
        card.querySelector(`#btn-show-${c.id}`).onclick = () => {
            const box = card.querySelector(`#box-resp-${c.id}`);
            const btn = card.querySelector(`#btn-show-${c.id}`);
            const isHidden = box.classList.contains("hidden");
            
            box.classList.toggle("hidden");
            btn.innerHTML = isHidden ? 
                `<i class="fa-solid fa-eye-slash"></i> Ocultar Resposta Padrão` : 
                `<i class="fa-solid fa-eye"></i> Revelar Resposta Padrão`;
        };
        
        root.appendChild(card);
    });
}

// --- 8. BIBLIOTECA DIGITAL - RENDER FILES -----------------
function renderBibliotecaFiles() {
    const root = document.getElementById("local-files-root");
    root.innerHTML = "";
    
    if (localFiles.length === 0) {
        root.innerHTML = `
            <div class="no-files-card">
                <i class="fa-solid fa-folder-closed"></i>
                <h4>Nenhum arquivo PDF encontrado na varredura</h4>
                <p>Coloque os PDFs de provas anteriores e editais na pasta <code>editais/</code> ou nas subpastas de <code>provas_gabaritos/</code>, e atualize a página.</p>
            </div>
        `;
        return;
    }
    
    // Group files by category
    const grouped = {};
    localFiles.forEach(f => {
        if (!grouped[f.category]) grouped[f.category] = [];
        grouped[f.category].push(f);
    });
    
    for (const [category, list] of Object.entries(grouped)) {
        const catTitle = document.createElement("h4");
        catTitle.style.gridColumn = "1 / -1";
        catTitle.style.marginTop = "20px";
        catTitle.style.borderBottom = "1px solid var(--border)";
        catTitle.style.paddingBottom = "8px";
        catTitle.style.fontFamily = "'Outfit', sans-serif";
        catTitle.textContent = category;
        root.appendChild(catTitle);
        
        list.forEach(f => {
            const card = document.createElement("div");
            card.className = "file-card";
            card.innerHTML = `
                <div class="file-icon"><i class="fa-regular fa-file-pdf"></i></div>
                <div class="file-info">
                    <strong title="${f.name}">${f.name}</strong>
                    <span>Tamanho: ${f.size}</span>
                </div>
                <a href="${f.url}" class="file-download-btn" title="Baixar arquivo">
                    <i class="fa-solid fa-arrow-down-to-bracket"></i>
                </a>
            `;
            root.appendChild(card);
        });
    }
}

// --- 9. ACCESSIBILITY (Alto Contraste & Fonte) ------------
function initAccessibility() {
    // 1. Contrast Toggle
    const btnContrast = document.getElementById("btn-contrast");
    btnContrast.addEventListener("click", () => {
        document.body.classList.toggle("high-contrast");
        const isContrast = document.body.classList.contains("high-contrast");
        localStorage.setItem("high-contrast", isContrast);
        showToast(isContrast ? "Alto Contraste ativado." : "Alto Contraste desativado.");
    });
    
    // Load contrast from local storage
    if (localStorage.getItem("high-contrast") === "true") {
        document.body.classList.add("high-contrast");
    }

    // 2. Font Scale
    let scale = parseFloat(localStorage.getItem("font-scale")) || 1.0;
    document.documentElement.style.setProperty("--font-scale", scale);

    document.getElementById("btn-font-inc").addEventListener("click", () => {
        if (scale < 1.3) {
            scale += 0.1;
            document.documentElement.style.setProperty("--font-scale", scale);
            localStorage.setItem("font-scale", scale);
            showToast("Fonte aumentada.");
        }
    });

    document.getElementById("btn-font-dec").addEventListener("click", () => {
        if (scale > 0.8) {
            scale -= 0.1;
            document.documentElement.style.setProperty("--font-scale", scale);
            localStorage.setItem("font-scale", scale);
            showToast("Fonte diminuída.");
        }
    });

    document.getElementById("btn-font-normal").addEventListener("click", () => {
        scale = 1.0;
        document.documentElement.style.setProperty("--font-scale", scale);
        localStorage.setItem("font-scale", scale);
        showToast("Fonte padrão restaurada.");
    });
}

// --- 10. TOAST NOTIFICATIONS ------------------------------
function showToast(message) {
    const banner = document.getElementById("toast-banner");
    const text = document.getElementById("toast-text");
    
    text.textContent = message;
    banner.classList.remove("hidden");
    
    // Clear previous timeout if exists
    if (window.toastTimeout) clearTimeout(window.toastTimeout);
    
    window.toastTimeout = setTimeout(() => {
        banner.classList.add("hidden");
    }, 3000);
}

// --- 11. CARREIRA SUB-TAB SWITCHING -----------------------
document.querySelectorAll(".car-tab-btn").forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll(".car-tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".carreira-tab-content").forEach(c => c.classList.remove("active"));
        
        btn.classList.add("active");
        document.getElementById(`cartab-${btn.dataset.cartab}`).classList.add("active");
    };
});

// --- 12. DYNAMIC CAREER TABLE RENDERING -------------------
const SALARIOS_D = [3181.39, 3311.83, 3447.61, 3588.97, 3736.11, 3889.29, 4048.75, 4214.75, 4387.56, 4567.45, 4754.71, 4949.66, 5152.59, 5363.85, 5583.77, 5812.70, 6051.02, 6299.11, 6557.38];
const SALARIOS_E = [5215.39, 5429.23, 5651.82, 5883.55, 6124.77, 6375.89, 6637.13, 6909.43, 7192.72, 7487.62, 7794.61, 8114.19, 8446.87, 8793.19, 9153.72, 9529.02, 9919.71, 10326.42, 10749.80];

function renderCarreiraTable() {
    const tbody = document.getElementById("carreira-tabela-body");
    if (!tbody) return;
    
    tbody.innerHTML = "";
    for (let i = 0; i < 19; i++) {
        const tr = document.createElement("tr");
        const padraoStr = (i + 1) < 10 ? `0${i + 1}` : `${i + 1}`;
        tr.innerHTML = `
            <td><strong>Padrão ${padraoStr}</strong></td>
            <td>R$ ${SALARIOS_D[i].toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            <td>R$ ${SALARIOS_E[i].toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
        `;
        tbody.appendChild(tr);
    }
}
