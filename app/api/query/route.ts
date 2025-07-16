import { listInvoices } from "./services";

export async function GET() {
  try {
    return Response.json(await listInvoices());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

// Example
// import { NextRequest, NextResponse } from "next/server";

// const API_KEY = process.env.GOOGLE_API_KEY;
// const CX = process.env.GOOGLE_CSE_ID;

// export async function GET(req: NextRequest) {
//     if (!API_KEY || !CX) {
//         return NextResponse.json({ error: "No Google API key or custom search engine ID provided" }, { status: 500 }); 
//     }

//     const { searchParams } = new URL(req.url);
//     const query = searchParams.get("q");
//     const page =  Number(searchParams.get("page") || "1");

//     if (!query) {
//         return NextResponse.json({ error: "Query is required" }, { status: 400 });
//     }

//     const startIndexes = [(page - 1) * 20 + 1, (page - 1) * 20 + 11];

//     try {
//         const requests = startIndexes.map(start =>
//             fetch(`https://www.googleapis.com/customsearch/v1?q=${query}&cx=${CX}&searchType=image&key=${API_KEY}&start=${start}&num=10`)
//                 .then(res => res.json())
//         );

//         const results = await Promise.all(requests);

//         const errorResult = results.find(res => res.error);
        
//         if (!results?.length || errorResult) {  
//             throw new Error(errorResult?.error?.message);
//         }

//         const images = results.flatMap(res => res.items || []);
        
//         const hasNextPage = results[results.length - 1].searchInformation.totalResults > page * 30;
//         const meta = {
//             hasNextPage,
//             nextPage: page + 1,
//         };

//         return NextResponse.json({ images, meta });
//     } catch (error) {
//         const message = error instanceof Error ? error.message : typeof error === "string" ? error : "Unknown error";
//         console.error("Error fetching data:", message);
//         return NextResponse.json({ error: message }, { status: 500 });
//     }
// }
