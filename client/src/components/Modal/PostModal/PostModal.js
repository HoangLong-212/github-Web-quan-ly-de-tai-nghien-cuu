import React from "react";
import { Modal, TextField, Button, TextareaAutosize } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { ModalState$ } from "../../../redux/selectors";
import useStyles from "./style";
import TextArea from "antd/lib/input/TextArea";
import FileBase64 from "react-file-base64";
import { createPosts, hideModal } from "../../../redux/actions";

export default function PostModal() {
  const [data, setData] = React.useState({
    title: "",
    content: "",
    attachment: "",
  });

  const { isShow } = useSelector(ModalState$);

  const dispatch = useDispatch();

  const classes = useStyles();

  const onClose = React.useCallback(() => {
    dispatch(hideModal());
    setData({
      title: '',
      content: '',
      attachment: '',
    })
  }, [dispatch]);

  const onSubmit = React.useCallback(() => {
    dispatch(createPosts.createPostsRequest(data));
    onClose();
  }, [dispatch, data]);

  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        <div className={classes.paper} id="PostModal">
          <form noValidate autoComplete="off" className={classes.form}>
            <TextField
              className={classes.title}
              required
              label="Title"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
            <TextareaAutosize
              className={classes.textarea}
              minRows={10}
              maxRows={15}
              placeholder="Content.."
              value={data.content}
              onChange={(e) => setData({ ...data, content: e.target.value })}
            />
            <FileBase64
              multiple={false}
              type="file"
              value={data.attachment}
              onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
            />
            <div className={classes.footer}>
              <Button
                variant="contained"
                color="primary"
                component="span"
                fullWidth
                onClick={onSubmit}
              >
                Create
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
