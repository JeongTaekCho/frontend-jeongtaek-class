import { withAuth } from "../../../../src/component/common/hocs/withAuth";
import CenterWrite from "../../../../src/component/service/center/write/centerWrite.container";

const CenterWritePage = () => {
  return <CenterWrite />;
};

export default withAuth(CenterWritePage);
