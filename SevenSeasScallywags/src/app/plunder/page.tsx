import connectMongoDB from "../../../config/mongodb";

export default function plunder() {
    connectMongoDB();
    return (
        <div>plunder</div>
    );
}
