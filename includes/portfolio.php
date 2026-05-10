<section id="portfolio" class="section-pad bg-alt">
    <div class="container">
        <div class="text-center mb-5" data-aos="fade-up">
            <div class="section-label">Trabalhos</div>
            <h2 class="section-title">Meu <span class="text-gradient">Portfólio</span></h2>
            <p class="text-muted-custom">35+ projetos entregues em produção</p>
        </div>

        <div class="filtros-wrapper d-flex flex-wrap gap-2 justify-content-center mb-3" data-aos="fade-up">
            <button class="filtro-btn active" data-filter="all">Todos</button>
            <button class="filtro-btn" data-filter="gamificacao">🎮 Gamificação</button>
            <button class="filtro-btn" data-filter="obras">🏗️ Obras</button>
            <button class="filtro-btn" data-filter="relatorios">📊 Relatórios</button>
            <button class="filtro-btn" data-filter="frontend">🎨 Frontend/UX</button>
            <button class="filtro-btn" data-filter="backend">⚙️ Backend/API</button>
            <button class="filtro-btn" data-filter="pagamentos">💳 Pagamentos</button>
            <button class="filtro-btn" data-filter="arquitetura">🔐 Arquitetura</button>
        </div>
        <p class="text-center text-muted-custom small mb-4" id="portfolio-counter"></p>

        <div class="row g-4" id="portfolio-grid">

            <!-- GAMIFICAÇÃO -->
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="gamificacao">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">🎯</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">SQL</span></div></div><h6>Motor de Saldo Dinâmico e Inventário FIFO</h6><p class="text-muted-custom small">Motor de cálculo de saldo com consumo FIFO, abatendo pontos dos registros mais antigos com histórico de auditoria completo.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="gamificacao">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">🛒</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">SQL</span><span class="ptag">E-commerce</span></div></div><h6>Integração de E-commerce ao Ledger de Pontos</h6><p class="text-muted-custom small">Migração do resgate de pontos para arquitetura centralizada de ledger com débito transacional automático.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="gamificacao">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">📦</span><div class="project-tags"><span class="ptag">SQL</span><span class="ptag">PHP</span></div></div><h6>Migração de Dados para Sistema de Pontuação</h6><p class="text-muted-custom small">Migração da lógica de pontuação para arquitetura centralizada com refatoração do modelo de dados legado.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="gamificacao">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">🏗️</span><div class="project-tags"><span class="ptag">SQL</span><span class="ptag">PHP</span><span class="ptag">Full-stack</span></div></div><h6>Arquitetura do Sistema Centralizado de Pontuação</h6><p class="text-muted-custom small">Ledger central consolidando registros de pontos de diferentes origens com restrições de integridade.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="gamificacao">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">⚙️</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">SQL</span></div></div><h6>Expansão do Módulo de Configurações de Gamificação</h6><p class="text-muted-custom small">Parâmetros de pontuação dinâmica por tipo de cadastro sem re-deploy.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="gamificacao">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">💡</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">MySQL</span><span class="ptag">JavaScript</span></div></div><h6>Sistema Dinâmico de Pontuação para Profissionais</h6><p class="text-muted-custom small">Full-stack para atribuição flexível e personalizável de pontos com interface de gerenciamento otimizada.</p></div>
            </div>

            <!-- OBRAS -->
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="obras">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">📊</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">JavaScript</span><span class="ptag">SQL</span></div></div><h6>Dashboard de KPIs em Obras</h6><p class="text-muted-custom small">Indicadores de engajamento com edição inline de status e prazos sem recarregar a página.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="obras">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">🔍</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">SQL</span><span class="ptag">Lightbox</span></div></div><h6>Filtros Avançados e UX no Módulo de Obras</h6><p class="text-muted-custom small">Filtros de escopo, preenchimento automático e visualizador de imagens integrado.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="obras">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">🏷️</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">SQL N:N</span></div></div><h6>Categorização Multi-Segmento para Parceiros</h6><p class="text-muted-custom small">Múltiplos segmentos por perfil via N:N com gestão completa e integridade referencial.</p></div>
            </div>

            <!-- RELATÓRIOS -->
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="relatorios">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">📋</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">SQL</span></div></div><h6>Rastreabilidade de Atendimento em Relatórios Financeiros</h6><p class="text-muted-custom small">Identificação de vendas assistidas por atendente com coluna hierárquica para comissões.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="relatorios">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">📈</span><div class="project-tags"><span class="ptag">SQL Avançado</span><span class="ptag">PHP</span></div></div><h6>Painel Analítico de Monitoramento</h6><p class="text-muted-custom small">Consulta com múltiplos JOINs e agregações para dados de reservas em tempo real.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="relatorios">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">⚡</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">SQL</span><span class="ptag">Otimização</span></div></div><h6>Otimização de Performance em Filtros</h6><p class="text-muted-custom small">Refatoração sem funções de alto custo no banco, mantendo performance estável em produção.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="relatorios">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">🗂️</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">MVC</span></div></div><h6>Desenvolvimento Modular de Relatório Financeiro</h6><p class="text-muted-custom small">Novo módulo com camadas Controller e Repository isoladas por adaptação de módulo existente.</p></div>
            </div>

            <!-- FRONTEND/UX -->
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="frontend">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">🔍</span><div class="project-tags"><span class="ptag">JavaScript</span><span class="ptag">Ajax</span><span class="ptag">PHP</span></div></div><h6>Busca Dinâmica com Autocomplete</h6><p class="text-muted-custom small">Autocomplete via Ajax com redirecionamento automático pós-cadastro e correções de responsividade.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="frontend">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">📱</span><div class="project-tags"><span class="ptag">JavaScript</span><span class="ptag">CSS</span><span class="ptag">UX/UI</span></div></div><h6>Refatoração de Interface para Mobile</h6><p class="text-muted-custom small">Layout Mobile-First em duas colunas eliminando rolagem horizontal em tela operacional crítica.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="frontend">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">💬</span><div class="project-tags"><span class="ptag">JavaScript</span><span class="ptag">UX</span></div></div><h6>Geração Dinâmica de Mensagens de Confirmação</h6><p class="text-muted-custom small">Algoritmo que gera mensagens formatadas para WhatsApp eliminando preenchimento manual.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="frontend">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">🗺️</span><div class="project-tags"><span class="ptag">JavaScript</span><span class="ptag">Google Maps</span></div></div><h6>Integração com Google Maps</h6><p class="text-muted-custom small">Conversão automática de endereços em links Google Maps com correções de responsividade.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="frontend">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">🛒</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">JavaScript</span></div></div><h6>CRM para Recuperação de Vendas</h6><p class="text-muted-custom small">Reengajamento de clientes com pedidos abandonados via e-mails personalizados direto do relatório.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="frontend">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">💰</span><div class="project-tags"><span class="ptag">Electron</span><span class="ptag">JavaScript</span></div></div><h6>Finance Controller</h6><p class="text-muted-custom small">App desktop de controle financeiro com gráficos, importação de planilhas Excel e notificações toast.</p></div>
            </div>

            <!-- BACKEND/API -->
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="backend">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">🔒</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">Null Safety</span></div></div><h6>Depuração em Módulo de Autenticação</h6><p class="text-muted-custom small">Análise de logs críticos com tratamento defensivo e fallbacks que garantem estabilidade.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="backend">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">☕</span><div class="project-tags"><span class="ptag">Java 21</span><span class="ptag">ERP</span></div></div><h6>Migração Java 8 → 21: Integração ERP</h6><p class="text-muted-custom small">Migração completa para Java 21 LTS com isolamento de ambientes de teste.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="backend">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">📧</span><div class="project-tags"><span class="ptag">Java 21</span><span class="ptag">Maven</span></div></div><h6>Migração Java 8 → 21: E-mails Transacionais</h6><p class="text-muted-custom small">Modernização de microsserviço com estratégia eliminando disparo acidental em produção.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="backend">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">📬</span><div class="project-tags"><span class="ptag">Java</span><span class="ptag">AWS SES</span></div></div><h6>Integração de E-mail com AWS SES</h6><p class="text-muted-custom small">Arquitetura de notificações com Amazon SES segregando métricas por aplicação. POC validada.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="backend">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">💲</span><div class="project-tags"><span class="ptag">Java</span><span class="ptag">Spring Boot</span><span class="ptag">REST</span></div></div><h6>Precificação Dinâmica Temporal em API REST</h6><p class="text-muted-custom small">API que calcula preço vigente ou futuro por data, com regra encapsulada no domínio.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="backend">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">⏰</span><div class="project-tags"><span class="ptag">Java</span><span class="ptag">@Scheduled</span></div></div><h6>Automação de Expiração de Vendas</h6><p class="text-muted-custom small">Rotina com lógica condicional de expiração por período e consultas otimizadas por criticidade.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="backend">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">🐛</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">MariaDB</span></div></div><h6>Correção de Bugs Críticos em Filtro de Vendas</h6><p class="text-muted-custom small">Correção de conflito de collation e vulnerabilidade SQL com migração para prepared statements.</p></div>
            </div>

            <!-- PAGAMENTOS -->
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="pagamentos">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">💰</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">MySQL</span><span class="ptag">JavaScript</span></div></div><h6>Gerenciamento de Meios de Pagamento</h6><p class="text-muted-custom small">Vínculo relacional entre métodos e formas de pagamento com lógica condicional de interface.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="pagamentos">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">🖥️</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">CRUD</span></div></div><h6>Módulo de Terminais de Pagamento (TEF)</h6><p class="text-muted-custom small">CRUD completo para terminais físicos com inativação lógica preservando histórico.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="pagamentos">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">✏️</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">MySQL</span><span class="ptag">JavaScript</span></div></div><h6>Edição de Itens com Controle de Desconto</h6><p class="text-muted-custom small">Recálculo em tempo real com persistência em múltiplas tabelas e auditoria completa.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="pagamentos">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">📅</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">MySQL</span></div></div><h6>Sistema de Reservas com Pagamento Antecipado</h6><p class="text-muted-custom small">Regras de pagamento antecipado em datas específicas com controle de capacidade por período.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="pagamentos">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">🏦</span><div class="project-tags"><span class="ptag">PHP MVC</span><span class="ptag">Multi-tenant</span></div></div><h6>Refatoração do Módulo de Caixas</h6><p class="text-muted-custom small">Desacoplamento de provedor com isolamento de dados por tenant em todas as operações.</p></div>
            </div>

            <!-- ARQUITETURA -->
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="arquitetura">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">🔑</span><div class="project-tags"><span class="ptag">Java/PHP</span><span class="ptag">Auth</span></div></div><h6>Fluxo Dinâmico de Recuperação de Acesso</h6><p class="text-muted-custom small">Módulo de recuperação de senhas para múltiplos identificadores por configuração de cliente.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="arquitetura">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">🔐</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">Multi-tenant</span></div></div><h6>Escopo de Acesso por Tenant</h6><p class="text-muted-custom small">Filtros garantindo que cada cliente acesse apenas seus próprios dados em todas as camadas.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="arquitetura">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">📡</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">SQL</span></div></div><h6>Módulo de Canais de Venda com Unicidade Condicional</h6><p class="text-muted-custom small">Validação de unicidade condicional bloqueando duplicatas para tipos operacionais específicos.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="arquitetura">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">🌍</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">JavaScript</span></div></div><h6>Cadastro Internacional no PDV</h6><p class="text-muted-custom small">Campos dinâmicos para clientes nacionais e estrangeiros com alternância automática de validações.</p></div>
            </div>
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="arquitetura">
                <div class="project-card h-100"><div class="project-header"><span class="project-icon">🖥️</span><div class="project-tags"><span class="ptag">PHP</span><span class="ptag">MySQL</span><span class="ptag">CRUD</span></div></div><h6>Módulo de Gerenciamento de Recursos Físicos</h6><p class="text-muted-custom small">Gestão de ativos físicos com controle de status e integração via chave estrangeira.</p></div>
            </div>

        </div>
    </div>
</section>
