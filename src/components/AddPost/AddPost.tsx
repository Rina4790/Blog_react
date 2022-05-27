import { useState, useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import styles from "./AddPost.module.css";

import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { Container } from "../templates/Container/Container";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { tmsFetch } from "../../services/helpers";

export const AddPost = () => {
  const { theme } = useContext(ThemeContext);

  const [title, setTitle] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState<Blob | null>(null);

  const onLoad = (event: any) => {
    setImageFile(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (event: any) => {
      setImage(event.target.result);
    };
  };

  const removeImage = () => {
    setImage("");
    setImageFile(null);
  };

  const createNewPost = () => {
    const formData = new FormData();

    if (imageFile) {
      formData.append("image", imageFile);
    }

    formData.append("text", text);
    formData.append("title", title);
    formData.append("lesson_num", String(number));

    tmsFetch("https://studapi.teachmeskills.by/blog/posts/", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      body: formData,
    });
  };

  return (
    <>
      <div className={styles.addPostIndex}>
        <Container isImage={false}>
          <div className={styles.addPostWrraper}>
            <Title text="Add new post" />
            <div className={styles.addPost}>
              <div className={styles.addText}>
                <Input
                  type="text"
                  label="Title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <Input
                  type="text"
                  label="Lesson number"
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                />
                <TextArea
                  value={text}
                  label="Text"
                  onChange={(event) => setText(event.target.value)}
                />
              </div>
              <div className={styles.addImg}>
                {image ? (
                  <>
                    <img src={image} />
                    <Button text="remove image" onClick={removeImage} />
                  </>
                ) : (
                  <p className={styles.addName} style={{ color: theme.text }}>
                    Image
                  </p>
                )}

                <div className={styles.addBtn}>
                  {image ? null : (
                    <>
                      <div style={{ position: "absolute" }}>
                        <Button text="Add" onClick={() => {}}></Button>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={onLoad}
                        style={{
                          width: "100%",
                          height: "100%",
                          zIndex: 100,
                          opacity: 0,
                        }}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.addManeBtn}>
              <Button text="Add" onClick={createNewPost}></Button>
            </div>
          </div>
        </Container>
      </div>
      <img
        src="../img/vectorForAdd.png"
        alt="vectorForAdd"
        className={styles.img}
      />
    </>
  );
};
