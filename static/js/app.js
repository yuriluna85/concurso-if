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
    "materia": "Conhecimentos Específicos",
    "enunciado": "Segundo Lev Vygotsky, a distância entre o nível de desenvolvimento real, determinado pela capacidade de resolver problemas de forma independente, e o nível de desenvolvimento potencial, determinado pela resolução de problemas sob a orientação de um adulto ou em colaboração com companheiros mais capazes, define-se como:",
    "options": [
      "Zona de Desenvolvimento Proximal (ZDP)",
      "Estágio de Operações Formais",
      "Mediação Semiótica",
      "Adaptação e Assimilação",
      "Aprendizagem Significativa"
    ],
    "resposta": 0,
    "justificativa": "Para Vygotsky, a Zona de Desenvolvimento Proximal (ZDP) é a distância entre o desenvolvimento real (o que a criança já faz sozinha) e o potencial (o que faz com ajuda). É nela que o ensino deve atuar para impulsionar a aprendizagem.",
    "explicacoes": [
      "Opção CORRETA. A ZDP define exatamente o espaço dinâmico onde ocorrem as interações pedagógicas e a mediação que impulsionam o desenvolvimento latente do sujeito.",
      "Opção INCORRETA. Este é um conceito pertencente à teoria psicogenética de Jean Piaget, caracterizando o período do pensamento lógico, abstrato e hipotético-dedutivo.",
      "Opção INCORRETA. A mediação semiótica é a internalização de signos e instrumentos culturais, um mecanismo essencial da teoria de Vygotsky, mas não descreve a distância de desenvolvimento.",
      "Opção INCORRETA. Adaptação e assimilação são processos biológicos e de equilibração cognitiva propostos por Jean Piaget para explicar a estruturação intelectual.",
      "Opção INCORRETA. A Aprendizagem Significativa é um conceito formulado por David Ausubel, descrevendo a ancoragem de novos conhecimentos em conceitos subordinantes preexistentes (subsunçores)."
    ]
  },
  {
    "id": "q2",
    "cargo": "tecnico_assuntos_educacionais",
    "materia": "Legislação Educacional",
    "enunciado": "A Lei de Diretrizes e Bases da Educação Nacional (Lei nº 9.394/1996), em seu artigo 3º, estabelece os princípios do ensino. Assinale a alternativa que NÃO corresponde a um desses princípios:",
    "options": [
      "Igualdade de condições para o acesso e permanência na escola.",
      "Liberdade de aprender, ensinar, pesquisar e divulgar a cultura, o pensamento, a arte e o saber.",
      "Pluralismo de ideias e de concepções pedagógicas.",
      "Unicidade de convicções políticas e religiosas no ambiente escolar.",
      "Garantia de padrão de qualidade."
    ],
    "resposta": 3,
    "justificativa": "O princípio correto é a coexistência de instituições públicas e privadas de ensino e o respeito à diversidade, sendo vedada qualquer imposição de unicidade ideológica, política ou religiosa no ambiente escolar.",
    "explicacoes": [
      "Princípio VÁLIDO. Está previsto no inciso I do Artigo 3º da LDB, garantindo que todos tenham igual direito de ingressar e se manter no sistema educacional.",
      "Princípio VÁLIDO. Consta no inciso II do mesmo artigo, assegurando a liberdade de cátedra e a livre manifestação intelectual e artística dos indivíduos.",
      "Princípio VÁLIDO. Presente no inciso III, fomenta a pluralidade metodológica e pedagógica como alicerce do pensamento científico e crítico.",
      "Princípio INCORRETO (Gabarito). A LDB preza pelo pluralismo e tolerância. A 'unicidade de convicções' contraria as premissas constitucionais e as liberdades democráticas.",
      "Princípio VÁLIDO. Estabelecido no inciso IX do artigo 3º, impõe ao Estado o dever de certificar níveis básicos de infraestrutura e qualidade no ensino."
    ]
  },
  {
    "id": "q3",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "No contexto da coordenação pedagógica e gestão escolar, o Projeto Político-Pedagógico (PPP) é compreendido como um instrumento teórico-metodológico que visa a:",
    "options": [
      "Cumprir uma exigência puramente burocrática dos órgãos reguladores de ensino.",
      "Direcionar de forma autocrática as ações dos professores em sala de aula.",
      "Orientar a prática educativa escolar a partir de uma construção coletiva, refletindo a identidade e as intencionalidades da comunidade escolar.",
      "Padronizar os conteúdos curriculares em conformidade estrita com as escolas da rede privada.",
      "Garantir a divisão técnica e fragmentada do trabalho pedagógico na instituição."
    ],
    "resposta": 2,
    "justificativa": "O PPP é um documento de construção coletiva e participativa que define a identidade da escola, suas metas e diretrizes pedagógicas, servindo como guia orientador para a práxis educativa em busca de transformações sociais.",
    "explicacoes": [
      "Opção INCORRETA. Embora o PPP seja legalmente exigido, reduzi-lo a um mero papel burocrático ignora sua dimensão política e sua função social e transformadora.",
      "Opção INCORRETA. O PPP apoia-se na gestão democrática e no diálogo, devendo emanar da participação coletiva, e não de decisões lineares e autoritárias da gestão.",
      "Opção CORRETA. O PPP traduz a autonomia pedagógica da escola, traçando metas comuns formuladas democraticamente por todos os segmentos da comunidade escolar.",
      "Opção INCORRETA. O documento busca firmar a identidade e a singularidade da escola diante de sua comunidade local, rechaçando a homogeneização curricular.",
      "Opção INCORRETA. O PPP busca a articulação interdisciplinar e a totalidade do fazer pedagógico, combatendo a fragmentação mecânica do trabalho docente."
    ]
  },
  {
    "id": "q4",
    "cargo": "pedagogo",
    "materia": "Conhecimentos Específicos",
    "enunciado": "De acordo com Jean Piaget, o período de desenvolvimento cognitivo caracterizado pelo aparecimento da linguagem, capacidade de representação mental e pelo egocentrismo intelectual denomina-se estágio:",
    "options": [
      "Sensório-motor",
      "Pré-operatório",
      "Operatório concreto",
      "Operatório formal",
      "Abstrato-conceitual"
    ],
    "resposta": 1,
    "justificativa": "O estágio pré-operatório (aproximadamente de 2 a 7 anos) é marcado pela emergência da função simbólica (linguagem, jogo simbólico), pensamento egocêntrico e incapacidade de realizar operações mentais reversíveis.",
    "explicacoes": [
      "Opção INCORRETA. O estágio sensório-motor (0 a 2 anos) baseia-se na inteligência prática e reflexa, sem representação mental ou pensamento conceitual.",
      "Opção CORRETA. O estágio pré-operatório introduz o raciocínio semiótico (uso de símbolos para representar objetos) acompanhado da rigidez egocêntrica de perspectiva intelectual.",
      "Opção INCORRETA. O período operatório concreto (7 a 11 anos) é marcado pelo início da reversibilidade de pensamento e lógica indutiva sobre objetos reais.",
      "Opção INCORRETA. O período operatório formal (a partir dos 11/12 anos) caracteriza-se pelo raciocínio hipotético-dedutivo e conceitos totalmente abstratos.",
      "Opção INCORRETA. Este termo não faz parte da taxonomia piagetiana clássica sobre os quatro períodos do desenvolvimento da inteligência."
    ]
  },
  {
    "id": "q5",
    "cargo": "assistente_alunos",
    "materia": "Conhecimentos Específicos (ECA)",
    "enunciado": "Segundo o Estatuto da Criança e do Adolescente (Lei nº 8.069/1990), considera-se criança, para os efeitos desta Lei, a pessoa até:",
    "options": [
      "Doze anos de idade incompletos.",
      "Doze anos de idade completos.",
      "Dez anos de idade incompletos.",
      "Quatorze anos de idade incompletos.",
      "Dezoito anos de idade incompletos."
    ],
    "resposta": 0,
    "justificativa": "O art. 2º do ECA define: 'Considera-se criança, para os efeitos desta Lei, a pessoa até doze anos de idade incompletos, e adolescente aquela entre doze e dezoito anos de idade.'",
    "explicacoes": [
      "Opção CORRETA. O ECA adota o limite de 12 anos incompletos (11 anos, 11 meses e 29 dias) para configurar legalmente a infância.",
      "Opção INCORRETA. Ao completar 12 anos de idade, o indivíduo passa a ser legalmente classificado como adolescente pela legislação.",
      "Opção INCORRETA. Dez anos incompletos não reflete o marco cronológico fixado pela Lei nº 8.069/1990.",
      "Opção INCORRETA. O limite de 14 anos não serve de divisão jurídica entre infância e adolescência (é contudo, a idade mínima para o trabalho como menor aprendiz).",
      "Opção INCORRETA. O limite de 18 anos incompletos marca o fim da fase de adolescência e a transição definitiva para a maioridade civil e penal."
    ]
  },
  {
    "id": "q6",
    "cargo": "assistente_alunos",
    "materia": "Legislação do Serviço Público",
    "enunciado": "De acordo com a Lei nº 8.112/1990, a investidura em cargo público ocorrerá com:",
    "options": [
      "A nomeação.",
      "A posse.",
      "O exercício.",
      "A aprovação no concurso público.",
      "A publicação do edital de homologação."
    ],
    "resposta": 1,
    "justificativa": "O art. 7º da Lei nº 8.112/1990 estabelece expressamente que 'A investidura em cargo público ocorrerá com a posse'.",
    "explicacoes": [
      "Opção INCORRETA. A nomeação é apenas um ato administrativo unilateral de provimento do cargo, que precede a investidura formal.",
      "Opção CORRETA. É com a assinatura do termo de posse que o cidadão aceita as atribuições e deveres do cargo, concretizando a investidura.",
      "Opção INCORRETA. O exercício representa o efetivo desempenho das funções pelo servidor público, iniciando após a investidura (posse).",
      "Opção INCORRETA. A aprovação no concurso apenas garante a expectativa de direito à nomeação, não constituindo investidura.",
      "Opção INCORRETA. A publicação da homologação encerra as etapas do certame e inicia o prazo de validade deste, não tendo relação com a investidura."
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
