import { DataControl } from "../models/Global.enum";

const LoadingSkeleton = () => {
  return (
    <div className="skeleton">
      {Array.from({ length: DataControl.skeleton }).map((_, index) => (
        <div key={index} className="skeleton__group">
          <div className="skeleton__line skeleton__line--short"></div>
          <div className="skeleton__line skeleton__line--medium"></div>
          <div className="skeleton__line skeleton__line--full"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
