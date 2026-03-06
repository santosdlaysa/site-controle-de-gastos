import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Excluir Conta — Controle de Gastos",
  description:
    "Saiba como excluir sua conta e todos os dados do aplicativo Controle de Gastos.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "março de 2026";

export default function DeleteAccountPage() {
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
              <p className="text-xs text-slate-400">Política de exclusão de conta</p>
            </div>
          </a>
        </header>

        {/* Title block */}
        <div className="mb-10 space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Excluir Conta
          </h1>
          <p className="text-sm text-slate-400">
            Última atualização: {LAST_UPDATED}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm leading-relaxed text-slate-300">

          {/* Intro */}
          <section className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-xl bg-slate-800/60 px-4 py-2.5 ring-1 ring-slate-700/60">
              <span className="text-base">📊</span>
              <span className="font-semibold text-slate-100">Controle de Gastos</span>
            </div>
            <p>
              Esta página descreve como os usuários do aplicativo{" "}
              <strong className="text-slate-100">Controle de Gastos</strong> podem solicitar
              e confirmar a exclusão permanente de sua conta e de todos os dados associados.
            </p>
          </section>

          {/* How to delete */}
          <section className="space-y-4">
            <h2 className="text-base font-semibold text-slate-100">Como excluir sua conta</h2>
            <p>
              A exclusão é feita diretamente no aplicativo, sem necessidade de entrar em
              contato com o suporte:
            </p>
            <ol className="space-y-3">
              {[
                <>Abra o aplicativo <strong className="text-slate-100">Controle de Gastos</strong> e faça login na sua conta.</>,
                <>Toque na aba <strong className="text-slate-100">Configurações</strong> (ícone de engrenagem, canto inferior direito).</>,
                <>Na seção <strong className="text-slate-100">Conta</strong>, role até o botão <strong className="text-slate-100">Excluir conta</strong> (ícone de lixeira vermelha).</>,
                <>Leia o aviso sobre o que será excluído e toque em <strong className="text-slate-100">Excluir conta</strong> para continuar.</>,
                <>Uma segunda confirmação será exibida. Toque em <strong className="text-slate-100">Sim, excluir tudo</strong> para confirmar a exclusão permanente.</>,
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
            <p>
              Após a confirmação, todos os seus dados são excluídos imediatamente e você é
              desconectado do aplicativo.
            </p>
          </section>

          {/* Data table */}
          <section className="space-y-4">
            <h2 className="text-base font-semibold text-slate-100">Dados excluídos e mantidos</h2>
            <p>Ao excluir sua conta, os seguintes dados são tratados da forma abaixo:</p>

            <div className="overflow-x-auto rounded-2xl border border-slate-700/80">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900/60">
                  <tr>
                    {["Dado", "O que acontece", "Retenção"].map((h) => (
                      <th key={h} className="px-4 py-2.5 font-medium text-slate-300">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {[
                    ["Informações da conta (nome, e-mail, senha)", "Excluído permanentemente", "Nenhuma", "deleted"],
                    ["Despesas registradas (todas as categorias)", "Excluído permanentemente", "Nenhuma", "deleted"],
                    ["Renda mensal (salário, vale, outros)", "Excluído permanentemente", "Nenhuma", "deleted"],
                    ["Orçamentos mensais e por categoria", "Excluído permanentemente", "Nenhuma", "deleted"],
                    ["Ganhos e gastos Uber", "Excluído permanentemente", "Nenhuma", "deleted"],
                    ["Sessão e tokens de autenticação", "Invalidados imediatamente", "Nenhuma", "deleted"],
                    ["Dados de terceiros (ex: banco via Pluggy)", "Não coletamos — apenas lemos para importar", "—", "kept"],
                  ].map(([dado, oque, retencao, type], i) => (
                    <tr key={i} className="bg-slate-900/20 even:bg-slate-900/40">
                      <td className="px-4 py-3 text-slate-200">{dado}</td>
                      <td className={`px-4 py-3 font-semibold ${type === "deleted" ? "text-red-400" : "text-green-400"}`}>
                        {oque}
                      </td>
                      <td className="px-4 py-3 text-slate-400">{retencao}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-slate-200">Período de retenção</h3>
              <p>
                Não há período de retenção adicional. Todos os dados pessoais são excluídos
                de forma permanente e imediata no momento da confirmação. Não mantemos backups
                individuais identificáveis após a exclusão.
              </p>
            </div>
          </section>

          {/* Warning */}
          <section>
            <div className="flex gap-4 rounded-2xl border border-red-900/50 bg-red-950/30 px-5 py-4">
              <span className="flex-shrink-0 text-xl">⚠️</span>
              <p className="text-red-300">
                <strong className="text-red-200">Ação irreversível.</strong> Após a exclusão,
                não é possível recuperar seus dados. Se desejar continuar usando o aplicativo
                no futuro, será necessário criar uma nova conta.
              </p>
            </div>
          </section>

          {/* Help */}
          <section className="space-y-3">
            <h2 className="text-base font-semibold text-slate-100">Precisa de ajuda?</h2>
            <p>
              Se tiver dificuldades para excluir sua conta pelo aplicativo ou quiser solicitar
              a exclusão por outro meio, entre em contato:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Abra uma issue em nosso repositório no GitHub</li>
              <li>Ou envie um e-mail para o desenvolvedor responsável</li>
            </ul>
            <p>
              Responderemos em até <strong className="text-slate-100">5 dias úteis</strong> e
              processaremos a exclusão manualmente se necessário.
            </p>
          </section>

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
