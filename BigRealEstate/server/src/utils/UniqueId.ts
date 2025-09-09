import { Types } from "mongoose";

const UniqueId = () => {
  return new Types.ObjectId().toString();
};

export default UniqueId;
