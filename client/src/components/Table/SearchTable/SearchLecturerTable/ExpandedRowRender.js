import { Button, Descriptions, PageHeader, Tabs, Tag } from "antd";
import moment from "moment";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getInfo,
  getUser,
  showUserModal,
  showUpdateUserModal,
} from "../../../../redux/actions";
import {
  FacultyState$,
  InfoState$,
  UserState$,
  UpdateUserModalState$,
} from "../../../../redux/selectors";

export default function ExpandedRowRender({ record, setCurrentId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfo.getInfoRequest());
  }, [dispatch]);

  const Infos = useSelector(InfoState$);

  const Faculty = useSelector(FacultyState$);

  const openUpdateUserModal = useCallback(() => {
    setCurrentId(record._id);
    dispatch(showUserModal());
  }, [dispatch, record._id, setCurrentId]);

  const InfoValue = Infos.find((Info) =>
    Info.username === record.username ? Info : null
  );

  const FacultyValue = Faculty.find((Faculty) =>
    Faculty.username === record.username ? Faculty : null
  );

  if (record.role === "Khoa") {
    return (
      <>
        <PageHeader
          title={FacultyValue.name}
          // extra={[
          //     <Button key="1" type="primary" onClick={openUpdateUserModal}>
          //       Sửa
          //     </Button>
          // ]}
        ></PageHeader>
      </>
    );
  } else {
    return (
      <>
        <PageHeader
          title={InfoValue.name}
          subTitle={InfoValue.facultyId.name}
          // extra={[
          //     <Button key="1" type="primary" onClick={openUpdateUserModal}>
          //       Sửa
          //     </Button>
          // ]}
        >
          <div>
            <Descriptions size="small" column={3}>
              <Descriptions.Item label="Ngày sinh">
                {moment(InfoValue.dateOfBirth).format("DD/MM/YYYY")}
              </Descriptions.Item>
              <Descriptions.Item label="Số điện thoại">
                {InfoValue.phoneNumber}
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                {InfoValue.email}
              </Descriptions.Item>
            </Descriptions>
          </div>
        </PageHeader>
      </>
    );
  }
}
