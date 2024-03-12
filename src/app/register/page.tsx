import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link className="underline" href="/login">
                Sign in
              </Link>
            </p>
          </div>
          <Card>
            <CardContent className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" required />
              </div>
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
                <Label htmlFor="password">Password</Label>
                <Input id="password" required type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" required type="password" />
              </div>
              <Button className="w-full">Sign up</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
