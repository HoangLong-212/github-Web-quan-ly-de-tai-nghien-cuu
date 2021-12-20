import React, { useState } from "react";
import { List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions";
import { LoginsState$, PostState$ } from "../../../redux/selectors";
import moment from "moment";
import "./style.css";
import { useHistory } from "react-router-dom";

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(PostState$);
  
  let new_posts = posts.slice().reverse();

  const users = useSelector(LoginsState$);

  React.useEffect(() => { 
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);
  const history = useHistory();

  function deletePost(id){
    dispatch(actions.deletePosts.deletePostsRequest(id)) 
    // console .log("[ID]",id);
  }




  return (
    <div className="List">
      <List
        size="large"
        bordered
        dataSource={new_posts}
        renderItem={(item) => (
          <List.Item
            // actions={users.role === "GiangVien" ? null : ([             
            //   <a key="list-loadmore-edit">edit</a>,
            //   <a key="list-loadmore-more">delete</a>
            // ])}
             actions={[             
              <a key="list-loadmore-more" onClick={()=>deletePost(item._id)} className="Delete" >Xóa</a>
            ]}
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
                      {item.title}
                    </a>
                  </div>
                  <div className="TimeAndAuthor">
                    {moment(item.updatedAt).format("HH:MM MMM DD, YYYY")} -{" "}
                    {item.author}
                  </div>
                </div>
              }
              description={<div className="Content">{item.content}</div>}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
