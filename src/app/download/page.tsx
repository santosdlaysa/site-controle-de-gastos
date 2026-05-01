import Image from "next/image";

export default function DownloadPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 flex flex-col items-center justify-center px-6">

      {/* Glow de fundo */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute left-1/4 bottom-0 h-[300px] w-[400px] rounded-full bg-violet-400/15 blur-[100px]" />
        <div className="absolute right-1/4 bottom-10 h-[250px] w-[350px] rounded-full bg-emerald-400/15 blur-[100px]" />
      </div>

      {/* Grade sutil */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-12">

        {/* Logo + texto */}
        <div className="flex flex-col items-center gap-5">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-cyan-400/25 blur-xl" />
            <Image
              src="/img.png"
              alt="Orgenyx logo"
              width={88}
              height={88}
              className="relative rounded-3xl shadow-xl shadow-cyan-200/60"
            />
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Orgenyx
            </h1>
            <p className="text-slate-500 text-sm leading-relaxed">
              Controle suas finanças com inteligência.<br />
              Disponível para Android e iPhone.
            </p>
          </div>
        </div>

        {/* Cards de download */}
        <div className="w-full flex flex-col gap-3">

          {/* Android */}
          <a
            href="https://play.google.com/store/apps/details?id=com.orgenyx"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:border-emerald-400/60 hover:shadow-md hover:shadow-emerald-100 hover:-translate-y-0.5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-200 transition-all group-hover:bg-emerald-100">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-emerald-500" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 0 0-.1521-.5676.416.416 0 0 0-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 0 0-.5677-.1521.4157.4157 0 0 0-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
              </svg>
            </div>

            <div className="flex-1 text-left">
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-widest mb-0.5">Disponível no</p>
              <p className="text-base font-semibold text-slate-800">Google Play</p>
            </div>

            <svg className="h-4 w-4 text-slate-300 transition-all group-hover:text-emerald-500 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* iOS */}
          <a
            href="https://apps.apple.com/us/app/orgenyx/id6760567600"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:border-cyan-400/60 hover:shadow-md hover:shadow-cyan-100 hover:-translate-y-0.5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 ring-1 ring-cyan-200 transition-all group-hover:bg-cyan-100">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-cyan-500" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </div>

            <div className="flex-1 text-left">
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-widest mb-0.5">Disponível na</p>
              <p className="text-base font-semibold text-slate-800">App Store</p>
            </div>

            <svg className="h-4 w-4 text-slate-300 transition-all group-hover:text-cyan-500 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

        </div>

        {/* Badges de confiança */}
        <div className="flex items-center gap-6 text-slate-400">
          <div className="flex items-center gap-1.5 text-xs">
            <svg className="h-3.5 w-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Gratuito
          </div>
          <div className="h-3 w-px bg-slate-200" />
          <div className="flex items-center gap-1.5 text-xs">
            <svg className="h-3.5 w-3.5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Sem anúncios
          </div>
          <div className="h-3 w-px bg-slate-200" />
          <div className="flex items-center gap-1.5 text-xs">
            <svg className="h-3.5 w-3.5 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            iOS & Android
          </div>
        </div>

        {/* Rodapé */}
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Orgenyx. Todos os direitos reservados.
        </p>

      </div>
    </div>
  );
}
