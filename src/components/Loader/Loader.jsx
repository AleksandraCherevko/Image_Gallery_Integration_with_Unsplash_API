import { Watch } from "react-loader-spinner";

export default function Loader() {
  return (
    <p>
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
  );
}
