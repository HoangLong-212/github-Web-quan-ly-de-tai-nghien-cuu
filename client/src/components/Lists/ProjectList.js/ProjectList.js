import React, { useState } from "react";
import { List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions";
import { LoginsState$, ProjectState$ } from "../../../redux/selectors";
import moment from "moment";
import "./style.css";
import { useHistory } from "react-router-dom";


export default function ProjectList() {
    const dispatch = useDispatch();
    const project = useSelector(ProjectState$);
    
    let new_projects = project.slice().reverse();

    console.log("[Project]",project);
  
    const users = useSelector(LoginsState$);
  
    React.useEffect(() => { 
      dispatch(actions.getProjects.getProjectsRequest());
    }, [dispatch]);
    const history = useHistory();
  
    // function deletePost(id){
    //   dispatch(actions.deletePosts.deletePostsRequest(id)) 
    //   // console .log("[ID]",id);
    // }
  
  
    return (
      <div className="List_Project">
        <List
          size="large"
          bordered
          dataSource={new_projects}
          renderItem={(item) => (
            <List.Item
              // actions={users.role === "GiangVien" ? null : ([             
              //   <a key="list-loadmore-edit">edit</a>,
              //   <a key="list-loadmore-more">delete</a>
              // ])}
              //  actions={[             
              //   <a key="list-loadmore-more" onClick={()=>deletePost(item._id)} className="Delete" >Xóa</a>
              // ]}
            > 
              <List.Item.Meta
                key={item._id}
                title={
                  <div>
                    <div className="div_Title">
                      <a
                        className="Title"
                        onClick={()=> {history.push("/Home_Admin/"+ item._id)}}
                      >
                        {item.TenDeTai}
                      </a>
                    </div>
                    <d className="TimeAndAuthor">
                      {moment(item.NgayBD).format("HH:MM MMM DD, YYYY")} - {" "}
                      
                    </d>
                    <d className="Status">
                    {item.TinhTrang}
                    </d> 
              
                  </div>
                }
                description={<div className="Content">{item.Mota}</div>}
              />
            </List.Item>
          )}
        />
      </div>
    );
}
