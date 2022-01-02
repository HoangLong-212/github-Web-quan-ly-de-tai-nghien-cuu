import { Button, PageHeader, Tabs, Tag } from "antd";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfo, getUser, showUserModal, showUpdateUserModal } from "../../../redux/actions";
import { FacultyState$, InfoState$, UserState$, Up, UpdateUserModalState$ } from "../../../redux/selectors";

export default function ExpandedRowRender({ record, setCurrentId }) {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getInfo.getInfoRequest());
    }, [dispatch]);


    const Infos = useSelector(InfoState$);

    const Faculty = useSelector(FacultyState$);

    const openUpdateUserModal = useCallback(() => {
        setCurrentId(record._id);
        dispatch(showUserModal());
    }, [dispatch]);

    const InfoValue = Infos.find((Info)=> 
    Info.username === record.username ? Info: null
    );

    const FacultyValue = Faculty.find((Faculty)=> 
    Faculty.username === record.username ? Faculty: null
    );

    if(record.role === "Khoa"){
        return(
            <>
            <PageHeader
            title={FacultyValue.name}
            extra={[
                <Button key="1" type="primary" onClick={openUpdateUserModal}>
                  Sửa
                </Button>
            ]}>
            </PageHeader>
            </>
        )
    }
    else{
    return(
        <>
        <PageHeader
        title={InfoValue.name}
        extra={[
            <Button key="1" type="primary" onClick={openUpdateUserModal}>
              Sửa
            </Button>
        ]}>
        </PageHeader>
        </>
    )
    }
}