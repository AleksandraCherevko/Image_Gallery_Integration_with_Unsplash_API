import { Watch } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div>
      <p className={css.loader}>
        <Watch
          visible={true}
          height="80"
          width="80"
          radius="48"
          color="#808080"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </p>
    </div>
  );
};

export default Loader;
