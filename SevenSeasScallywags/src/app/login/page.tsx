import connectMongoDB from "../../../config/mongodb";

export default function LoginPage() {
  connectMongoDB();
  return (
    <div className="text-white text-center mt-10">
        <h1 className="text-3xl">Login Page</h1>
    </div>
  );
}
