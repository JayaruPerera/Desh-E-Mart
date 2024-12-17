import {Button, ButtonGroup} from "@nextui-org/button";
import Link from "next/link";


export default function LoginPage() {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center max-w-4xl m-auto">
           
            <h1 className="text-4xl font-bold max-w-lg text-center">Admin Login</h1>
            <Link href="/admin/dashboard">
            <Button color="secondary" variant="ghost" className="mt-6" size="lg">Login</Button>
            </Link>
        
        </div>
    );
}