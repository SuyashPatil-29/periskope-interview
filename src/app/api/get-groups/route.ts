import { db } from "@/lib/db";

export async function GET(){
    try {
        const groups = await db.group.findMany()
        return new Response(JSON.stringify(groups))
    } catch (error) {
        console.log("GET GROUPS API ERROR");
        return new Response(JSON.stringify(error), {status : 500})
    }
}