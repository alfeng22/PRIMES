import { createSupabaseServerClient } from "@/utils/supabase/clients/server-props";
import { ArrowBigLeftDash } from "lucide-react";
import { GetServerSidePropsContext } from "next";


export default function Home() {

  return (
    <div>
      <p className="font-bold text-lg p-6">Welcome!</p>
      <div className="flex flex-row gap-3 px-6 pt-2">
        <ArrowBigLeftDash />
        <p className="font-bold">
          Create or join a server on the sidebar here.
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Create the supabase context that works specifically on the server and
  // pass in the context.
  const supabase = createSupabaseServerClient(context);

  // Attempt to load the user data
  const { data: userData, error: userError } = await supabase.auth.getUser();

  // If the user is not logged in, redirect them to the login page.
  if (userError || !userData) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}