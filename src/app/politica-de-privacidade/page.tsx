import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — Controle de Gastos",
  description:
    "Saiba como o aplicativo Controle de Gastos coleta, usa e protege seus dados pessoais.",
  robots: { index: false, follow: false },
};

const LAST_UPDATED = "5 de março de 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-6 py-12">
        {/* Header */}
        <header className="mb-10 flex items-center gap-3">
          <a href="/" className="flex items-center gap-3 no-underline">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 ring-1 ring-cyan-500/40">
              <span className="text-lg font-bold text-cyan-400">CG</span>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight text-slate-100">
                Controle de Gastos
              </p>
              <p className="text-xs text-slate-400">App móvel para organizar suas finanças</p>
            </div>
          </a>
        </header>

        {/* Title block */}
        <div className="mb-10 space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="text-sm text-slate-400">
            Última atualização: {LAST_UPDATED}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-sm leading-relaxed text-slate-300">

          {/* 1 */}
          <Section title="1. Quem somos">
            <p>
              O <strong className="text-slate-100">Controle de Gastos</strong> é um aplicativo
              mobile e web de controle financeiro pessoal desenvolvido de forma independente. O
              responsável pelo tratamento dos seus dados é o desenvolvedor/proprietário do
              aplicativo ("<strong className="text-slate-100">nós</strong>").
            </p>
            <p>
              Esta Política de Privacidade descreve quais dados coletamos, por que coletamos,
              como usamos e como você pode exercer seus direitos, em conformidade com a{" "}
              <strong className="text-slate-100">
                Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)
              </strong>
              .
            </p>
          </Section>

          {/* 2 */}
          <Section title="2. Dados que coletamos">
            <SubSection title="2.1 Dados de cadastro e autenticação">
              <ul className="ml-4 list-disc space-y-1">
                <li>
                  <strong className="text-slate-100">E-mail e senha</strong> — quando você cria
                  uma conta local. A senha é armazenada somente como hash criptográfico (scrypt)
                  e nunca em texto puro.
                </li>
                <li>
                  <strong className="text-slate-100">Nome e e-mail via OAuth</strong> — quando
                  você opta por entrar com uma conta de terceiro (ex.: Google via Manus OAuth).
                  Recebemos apenas as informações que o provedor autoriza compartilhar.
                </li>
                <li>
                  <strong className="text-slate-100">Token de sessão</strong> — gerado após o
                  login e armazenado de forma segura no dispositivo (
                  <em>expo-secure-store</em> no celular; cookie <em>HttpOnly</em> e{" "}
                  <em>localStorage</em> no navegador).
                </li>
              </ul>
            </SubSection>

            <SubSection title="2.2 Dados financeiros inseridos por você">
              <ul className="ml-4 list-disc space-y-1">
                <li>
                  <strong className="text-slate-100">Despesas</strong>: nome, categoria, valor,
                  data, parcelamento e status de pagamento.
                </li>
                <li>
                  <strong className="text-slate-100">Receitas</strong>: salário, vale-alimentação
                  e outros rendimentos mensais.
                </li>
                <li>
                  <strong className="text-slate-100">Orçamentos</strong>: limite total e por
                  categoria de gasto.
                </li>
                <li>
                  <strong className="text-slate-100">Ganhos e gastos Uber</strong>: descrição,
                  categoria (corrida, combustível, pedágio etc.), tipo de entrada (ganho/gasto),
                  valor e data.
                </li>
              </ul>
            </SubSection>

            <SubSection title="2.3 Dados bancários via Pluggy (Open Banking)">
              <p>
                Se você optar por conectar uma conta bancária por meio da integração com o{" "}
                <strong className="text-slate-100">Pluggy</strong>, as seguintes informações
                são importadas automaticamente:
              </p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Transações de débito no período selecionado (descrição, valor, data e categoria).</li>
                <li>Identificador externo da transação (<em>clientId</em>) para deduplicação.</li>
              </ul>
              <p>
                Nenhuma credencial bancária (senha, token de acesso ao banco) é armazenada por
                nós. A autenticação com o banco é realizada diretamente pela Pluggy em ambiente
                seguro. Consulte a{" "}
                <a
                  href="https://pluggy.ai/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300"
                >
                  Política de Privacidade da Pluggy
                </a>{" "}
                para entender como ela trata seus dados bancários.
              </p>
            </SubSection>

            <SubSection title="2.4 Notificações do Nubank">
              <p>
                O app conta com um listener opcional de notificações push do Nubank. Quando
                ativado, o aplicativo lê o conteúdo de notificações recebidas no dispositivo para
                identificar transações e registrá-las automaticamente. Esse processamento ocorre
                localmente e apenas os dados da transação identificada (valor, descrição) são
                enviados ao servidor.
              </p>
            </SubSection>

            <SubSection title="2.5 Dados técnicos">
              <ul className="ml-4 list-disc space-y-1">
                <li>Data e hora do último acesso.</li>
                <li>Logs de erro do servidor (sem dados pessoais identificáveis).</li>
              </ul>
            </SubSection>
          </Section>

          {/* 3 */}
          <Section title="3. Como usamos seus dados">
            <Table
              headers={["Finalidade", "Base legal (LGPD)"]}
              rows={[
                ["Criar e autenticar sua conta", "Execução de contrato (art. 7º, V)"],
                ["Armazenar e exibir suas despesas, receitas e orçamentos", "Execução de contrato (art. 7º, V)"],
                ["Importar transações bancárias via Pluggy", "Consentimento (art. 7º, I)"],
                ["Detectar transações em notificações do Nubank", "Consentimento (art. 7º, I)"],
                ["Segurança, prevenção de fraudes e estabilidade do serviço", "Legítimo interesse (art. 7º, IX)"],
                ["Cumprimento de obrigações legais", "Obrigação legal (art. 7º, II)"],
              ]}
            />
          </Section>

          {/* 4 */}
          <Section title="4. Compartilhamento de dados">
            <p>Não vendemos, alugamos nem comercializamos seus dados pessoais. O compartilhamento ocorre apenas nas situações abaixo:</p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong className="text-slate-100">Pluggy</strong> — para conectar sua conta
                bancária e importar transações, mediante seu consentimento explícito.
              </li>
              <li>
                <strong className="text-slate-100">Manus OAuth</strong> — para autenticação via
                conta de terceiro, somente quando você escolhe essa opção.
              </li>
              <li>
                <strong className="text-slate-100">Render.com</strong> — provedor de infraestrutura
                onde o banco de dados PostgreSQL está hospedado. Os dados são transmitidos via
                conexão SSL criptografada.
              </li>
              <li>
                <strong className="text-slate-100">Autoridades públicas</strong> — quando
                exigido por lei, ordem judicial ou regulamentação aplicável.
              </li>
            </ul>
          </Section>

          {/* 5 */}
          <Section title="5. Retenção de dados">
            <p>
              Seus dados são mantidos enquanto sua conta estiver ativa. Ao solicitar a exclusão
              da conta, todos os dados pessoais associados são permanentemente removidos do banco
              de dados em até <strong className="text-slate-100">30 dias</strong>, salvo obrigação
              legal de retenção.
            </p>
          </Section>

          {/* 6 */}
          <Section title="6. Segurança">
            <ul className="ml-4 list-disc space-y-2">
              <li>Senhas armazenadas como hash scrypt (salt aleatório por usuário).</li>
              <li>Sessões gerenciadas por JWT com segredo configurável via variável de ambiente.</li>
              <li>Tokens de sessão em <em>expo-secure-store</em> (keystore/keychain do SO) no mobile.</li>
              <li>Conexão com o banco de dados via SSL obrigatório.</li>
              <li>Cookies de sessão com flag <em>HttpOnly</em> no navegador.</li>
            </ul>
            <p>
              Apesar das medidas adotadas, nenhum sistema é 100 % invulnerável. Caso você
              identifique qualquer vulnerabilidade, por favor nos contate imediatamente.
            </p>
          </Section>

          {/* 7 */}
          <Section title="7. Seus direitos (LGPD)">
            <p>Você tem direito a:</p>
            <Table
              headers={["Direito", "Como exercer"]}
              rows={[
                ["Confirmação e acesso", "Solicite uma cópia dos seus dados pelo e-mail de contato."],
                ["Correção", "Edite diretamente no app ou solicite via e-mail."],
                ["Anonimização, bloqueio ou eliminação", "Solicite pelo e-mail de contato."],
                ["Portabilidade", "Solicite exportação dos seus dados em formato JSON."],
                ["Revogação do consentimento", "Desconecte integrações bancárias nas Configurações ou solicite exclusão da conta."],
                ["Informação sobre compartilhamento", "Detalhado na Seção 4 desta política."],
                ["Oposição ao tratamento", "Solicite pelo e-mail de contato."],
              ]}
            />
            <p>
              Para exercer qualquer direito, entre em contato pelo e-mail informado na Seção 9.
              Responderemos em até <strong className="text-slate-100">15 dias úteis</strong>.
            </p>
          </Section>

          {/* 8 */}
          <Section title="8. Cookies e armazenamento local">
            <p>O app utiliza as seguintes formas de armazenamento no dispositivo/navegador:</p>
            <Table
              headers={["Tecnologia", "Finalidade"]}
              rows={[
                ["Cookie HttpOnly (app_session_id)", "Manter sessão autenticada no navegador web"],
                ["localStorage (web)", "Armazenar token de sessão no navegador"],
                ["expo-secure-store (mobile)", "Armazenar token de sessão de forma criptografada"],
                ["AsyncStorage (legado)", "Dados de versões anteriores do app — migrados automaticamente ao servidor"],
              ]}
            />
            <p>
              Não utilizamos cookies de rastreamento, publicidade ou analytics de terceiros.
            </p>
          </Section>

          {/* 9 */}
          <Section title="9. Contato e encarregado (DPO)">
            <p>
              Para dúvidas, solicitações ou exercício dos seus direitos, entre em contato:
            </p>
            <div className="mt-3 rounded-2xl border border-slate-700/80 bg-slate-900/40 p-4 text-slate-200">
              <p>
                <strong className="text-slate-100">Responsável pelo aplicativo</strong>
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Envie sua mensagem para o e-mail disponível na página principal do app ou pela
                loja de aplicativos onde ele estiver publicado.
              </p>
            </div>
          </Section>

          {/* 10 */}
          <Section title="10. Alterações nesta política">
            <p>
              Podemos atualizar esta política periodicamente. Quando houver mudanças relevantes,
              você será notificado dentro do próprio app ou por e-mail. O uso continuado do
              aplicativo após a publicação das alterações implica aceitação da política revisada.
            </p>
            <p>
              A versão em vigor é sempre identificada pela data de "Última atualização" no topo
              desta página.
            </p>
          </Section>

        </div>

        {/* Footer */}
        <footer className="mt-14 border-t border-slate-800/80 pt-6">
          <div className="flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Controle de Gastos. Todos os direitos reservados.</p>
            <a
              href="/"
              className="text-cyan-500 underline underline-offset-2 hover:text-cyan-400"
            >
              ← Voltar para a página inicial
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* ─── helpers ─── */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-base font-semibold text-slate-100">{title}</h2>
      {children}
    </section>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <h3 className="font-medium text-slate-200">{title}</h3>
      {children}
    </div>
  );
}

function Table({
  headers,
  rows,
}: {
  headers: [string, string];
  rows: [string, string][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-700/80">
      <table className="w-full text-left text-xs">
        <thead className="bg-slate-900/60">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-2.5 font-medium text-slate-300"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/60">
          {rows.map(([col1, col2], i) => (
            <tr key={i} className="bg-slate-900/20 even:bg-slate-900/40">
              <td className="px-4 py-3 text-slate-200">{col1}</td>
              <td className="px-4 py-3 text-slate-400">{col2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
