import Header from "@/components/Header";
import Link from "next/link";

export default async function UserPage() {

    return (
        <>
            <Header />
            <h2>User List PAge</h2>

            <ul>
                <Link href="/users/Herby">
                    <li>Herby</li>
                </Link>
                <Link href="/users/Jessika">
                    <li>Jessika</li>
                </Link>
                
            </ul>
        </>
    );
}