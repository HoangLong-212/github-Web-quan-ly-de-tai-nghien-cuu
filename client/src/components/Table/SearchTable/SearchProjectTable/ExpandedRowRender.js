import { Button, Descriptions, Divider, PageHeader, Tabs, Tag } from "antd";
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

  const InfoValue = Infos.find((Info) =>
    Info.username === record.username ? Info : null
  );

  const FacultyValue = Faculty.find((Faculty) =>
    Faculty.username === record.username ? Faculty : null
  );

  return (
    <>
      <PageHeader
        title={record.TenDeTai}
        subTitle={record.idTeam.MaTeam + " - " + record.idTeam.TenTeam  }
        // extra={[
        //     <Button key="1" type="primary" onClick={openUpdateUserModal}>
        //       Sửa
        //     </Button>
        // ]}
      >
        <div>
          <Descriptions size="small" column={2}>
            <Descriptions.Item label="Khoa">
              {record.idTeam.idChuNhiem.facultyId.name}
            </Descriptions.Item>
            <Descriptions.Item label="Cấp độ">{record.Capdo}</Descriptions.Item>
            <Descriptions.Item label="Ngày bắt đầu">
              {moment(record.NgayBD).format("DD/MM/YYYY")}
            </Descriptions.Item>
            <Descriptions.Item label="Ngày kết thúc">
              {moment(record.NgayKT).format("DD/MM/YYYY")}
            </Descriptions.Item>
            <Descriptions.Item label="Chủ nhiệm">
              {record.idTeam.idChuNhiem.name +
                " - " +
                record.idTeam.idChuNhiem.username}
            </Descriptions.Item>
            <Descriptions.Item label="Thành viên">
              <div>
                {record.idTeam.ThanhVien[0] === undefined ? null : (
                  <div>
                    {record.idTeam.ThanhVien[0].username} -{" "}
                    {record.idTeam.ThanhVien[0].name}
                  </div>
                )}
                {record.idTeam.ThanhVien[1] === undefined ? null : (
                  <div>
                    {record.idTeam.ThanhVien[1].username} -{" "}
                    {record.idTeam.ThanhVien[1].name}
                  </div>
                )}
                {record.idTeam.ThanhVien[2] === undefined ? null : (
                  <div>
                    {record.idTeam.ThanhVien[2].username} -{" "}
                    {record.idTeam.ThanhVien[2].name}
                  </div>
                )}
                {record.idTeam.ThanhVien[3] === undefined ? null : (
                  <div>
                    {record.idTeam.ThanhVien[3].username} -{" "}
                    {record.idTeam.ThanhVien[3].name}
                  </div>
                )}
                {record.idTeam.ThanhVien[4] === undefined ? null : (
                  <div>
                    {record.idTeam.ThanhVien[4].username} -{" "}
                    {record.idTeam.ThanhVien[4].name}
                  </div>
                )}
              </div>
            </Descriptions.Item>
            <Descriptions.Item label="Mô tả">{record.Mota}</Descriptions.Item>
          </Descriptions>
        </div>
      </PageHeader>
    </>
  );
}
