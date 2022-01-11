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

  return (
    <>
      <PageHeader
        title={record.Title}
        subTitle={record.MaBaoCao}
        // extra={[
        //     <Button key="1" type="primary" onClick={openUpdateUserModal}>
        //       Sửa
        //     </Button>
        // ]}
      >
        <div>
          <Descriptions size="small" column={3}>
          <Descriptions.Item label="Đề tài">
              {record.idCouncil.idDeTai.MaDeTai + " - " + record.idCouncil.idDeTai.TenDeTai}
            </Descriptions.Item>
            <Descriptions.Item >
              {}
            </Descriptions.Item>
            <Descriptions.Item >
              {}
            </Descriptions.Item>
            <Descriptions.Item label="Khoa tiếp nhận">
              {record.idCouncil.idDeTai.idTeam.idChuNhiem.facultyId.name + " - " + record.idCouncil.idDeTai.idTeam.idChuNhiem.facultyId.username}
            </Descriptions.Item>
            <Descriptions.Item >
              {}
            </Descriptions.Item>
            <Descriptions.Item >
              {}
            </Descriptions.Item>
            <Descriptions.Item label="Chủ tịch">
              {record.idCouncil.idChuTich.username +
                " - " +
                record.idCouncil.idChuTich.name}
            </Descriptions.Item>
            <Descriptions.Item label="Thư ký">
              {record.idCouncil.idThuKy.username +
                " - " +
                record.idCouncil.idThuKy.name}
            </Descriptions.Item>
            <Descriptions.Item >
              {}
            </Descriptions.Item>
            <Descriptions.Item label="Phản biện 1">
              {record.idCouncil.idPhanBien1.username +
                " - " +
                record.idCouncil.idPhanBien1.name}
            </Descriptions.Item>
            <Descriptions.Item label="Phản biện 2">
              {record.idCouncil.idPhanBien2.username +
                " - " +
                record.idCouncil.idPhanBien2.name}
            </Descriptions.Item>
            <Descriptions.Item >
              {}
            </Descriptions.Item>
            <Descriptions.Item label="Ủy viên">
              <div> <div>
                {" "}
                {record.idCouncil.UyVien[0].username +
                  " - " +
                  record.idCouncil.UyVien[0].name}
              </div>
              <div>
                {" "}
                {record.idCouncil.UyVien[1].username +
                  " - " +
                  record.idCouncil.UyVien[1].name}
              </div>
              <div>
                {record.idCouncil.UyVien[2].username +
                  " - " +
                  record.idCouncil.UyVien[2].name}
              </div></div>
            </Descriptions.Item>

            {/* <Descriptions.Item label="Thành viên">
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
            </Descriptions.Item> */}
                        <Descriptions.Item >
              {}
            </Descriptions.Item>
            <Descriptions.Item >
              {}
            </Descriptions.Item>
            <Descriptions.Item label="Nội dung">
              {record.Content}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </PageHeader>
    </>
  );
}
