import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email below to login to your account
            </p>
          </div>
          <Card>
            <CardContent className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    className="ml-auto inline-block text-sm underline"
                    href="#"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" required type="password" />
              </div>
              <Button className="w-full">Login</Button>
            </CardContent>
          </Card>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link className="underline" href="/register">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
