import Chart from "../components/Chart";
import GeneralData from "../components/generalData";

import { Bigsection } from "./style";

const ShowSettings = () => {
  return (
    <Bigsection>
      <GeneralData />
      <Chart />
    </Bigsection>
  );
};

export default ShowSettings;
