import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center p-6">
      <Card className="w-full space-y-5">
        <h1 className="text-3xl font-black text-white">Sign up</h1>
        <Input type="text" placeholder="Full name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button className="w-full">Create account</Button>
        <p className="text-sm text-slate-400">
          Already have an account? <Link href="/login">Log in</Link>
        </p>
      </Card>
    </main>
  );
}
