import { revalidateTag } from "next/cache";

export async function POST(request) {
  const body = await request.json();

  // Check for secret to confirm this is a valid request
  if (body.secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    if (body._type === "homepage") {
      revalidateTag("homepage");
      return NextResponse.json({
        revalidated: true,
        now: Date.now(),
        tag: "homepage",
      });
    }

    return NextResponse.json({ revalidated: true, now: Date.now(), tag });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
