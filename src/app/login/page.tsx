import LoginForm from "@/components/LoginForm";
import Headline from "@/components/dashboard/Headline";

export default function LoginPage() {
  return (
    <main className="w-full h-full bg-slate-100 flex items-center justify-center">
      <section className="container max-w-2xl p-12 md:p-24">
        <div className="bg-white p-4 rounded-sm border border-slate-200 shadow-sm">
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
