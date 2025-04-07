import connectMongoDB from "../../../config/mongodb";

export default function profile() {
    connectMongoDB();
    return (
        <div>profile</div>
    );
}
