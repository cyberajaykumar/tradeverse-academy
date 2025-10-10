import Link from 'next/link';
import InputField from '@/components/ui/InputField';
import Button from '@/components/ui/Button';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Login to your Account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{' '}
            <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
              create a new account
            </Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-6">
          <InputField label="Email address" name="email" type="email" placeholder="you@example.com" />
          <InputField label="Password" name="password" type="password" placeholder="••••••••" />
          
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>
          
          <div>
            <Button>Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
  
