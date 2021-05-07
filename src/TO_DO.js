import React from "react";
import EachNote from "./EachNote";
import Button from "./Button";
import { Simulate } from "react-dom/test-utils";

class TO_DO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storage: [],
      start: 1,
      end: 0,
      open: { status: false, id: null },
      currentOpenId: null,
      Description: {
        desc: "...description",
        pass: true,
        id: null,
      },
    };
    this.store = localStorage.getItem("myStore");
    this.index = 0;
    this.add = this.add.bind(this);
    this.Delete = this.Delete.bind(this);
    this.Update = this.Update.bind(this);
    this.Next = this.Next.bind(this);
    this.Prev = this.Prev.bind(this);
    this.Edit = this.Edit.bind(this);
    this.onblur = this.onblur.bind(this);
    this.InputRef = React.createRef();
    this.statusHandler = this.statusHandler.bind(this);
    this.descriptionHandler = this.descriptionHandler.bind(this);
  }

  componentDidMount() {
    const localStorage_data = JSON.parse(this.store);
    localStorage_data &&
      this.setState((prevState) => {
        return {
          ...prevState,
          storage: [...prevState.storage, ...localStorage_data],
          end: localStorage_data.length,
        };
      });
  }

  statusHandler(event, id) {
    let elem_1 = document.getElementById(
      "statushandler" + (id >= 0 ? id : this.state.currentOpenId)
    );
    elem_1 = elem_1.childNodes[0].childNodes[0];
    let elem_2 = event.target;

    if (elem_1.className != elem_2.className) {
      const elem_1_name = elem_1.className.split(" ");
      const elem_2_name = elem_2.className.split(" ");
      let temp;
      elem_1.classList.remove(...elem_1_name);
      elem_1.classList.add(...elem_2_name, "status_selector");
      elem_2.classList.remove(...elem_2_name);
      elem_2.classList.add(...elem_1_name);

      // ClassName replacement

      const UpdatedData = this.state.storage.map((val, index) => {
        // editing model

        return id != index
          ? val
          : {
              message: val.message,
              status: [...elem_2_name],
            };
      });

      this.setState(
        // Storage updated and open is false
        (prevState) => {
          // console.log("prevState", prevState.storage);
          return {
            ...this.state,
            storage: [...UpdatedData],
            open: { status: !this.state.open.status, id: id },
          };
        }
      );
    } else if (id != null) {
      this.state.open.id != id
        ? this.setState(
            (prevstate) => {
              return {
                ...prevstate,
                currentOpenId: id, // id update
                open: { status: !this.state.open.status, id: id },
              };
            },
            () => {
              // console.log("first setState", this.state.currentOpenId);
            }
          )
        : this.setState((prevState) => {
            return {
              ...prevState,
              open: {
                ...prevState.open,
                status: !prevState.open.status,
              },
            };
          });
    }
  }
  ///////.................   ADD METHOD

  // here when we click add then a notes will add or render to notebox(simply in a section tag)

  add() {
    this.note = document.getElementById("note").value;

    this.note != "" &&
      this.setState((prevstate) => {
        return {
          ...prevstate,
          storage: [
            ...prevstate.storage,
            {
              message: this.note,
              status: ["fas", "fa-running"],
            },
          ],
          start: prevstate.start,
          end: prevstate.end + 1,
        };
      });
    document.getElementById("note").value = "";

    // Testing .... Field

    // Testing Field end
  }

  //////...................... Next Method

  // it will render next (max - 5) element from list of Note(stored in this.state.Note)

  Next() {
    if (
      this.state.storage.length > 4 &&
      this.state.end >= this.state.start + 4
    ) {
      this.setState((prevstate) => ({
        ...prevstate,
        start: prevstate.start + 4,
      }));
    }
  }

  /////////...........................Prev Method

  // it will render previous 5 element  (next and prev will only work when notes is greater than 5 otherwise it will be disabled)
  Prev() {
    if (this.state.start > 4) {
      this.setState((prevstate) => ({
        ...prevstate,
        start: prevstate.start - 4,
      }));
    }
  }

  ///////////................... Update Method

  // On every action we perform on our app cause state change so  it will run on every time we make changes in state

  Update() {
    if (
      this.state.storage == null ||
      (this.state.storage.length == 0 && this.state.pass)
    ) {
      this.state.storage.length == 0 &&
        this.setState((prevState) => {
          return {
            ...prevState,
            Description: "....description",
            pass: false,
          };
        });
      this.result = <p className="mx-3 my-3"> Not Found any Notes....</p>;
      return this.result;
    } else {
      this.element = this.state.storage.map((val, index) => {
        if (index >= this.state.start - 1 && index <= this.state.start + 2) {
          return (
            <EachNote
              key={index}
              val={val.message}
              id={index}
              Delete={this.Delete}
              Edit={this.Edit}
              statusHandler={this.statusHandler}
              open={this.state.open}
              descriptionHandler={this.descriptionHandler}
              status={val.status}
            />
          );
        }
      });
      return this.element;
    }
  }

  ///////////......................... Delete Method

  // it will delete specific note and onclick delete icon it will get that notebox id and it  will match with our Note index  if id(that would going to be delete)  and note index match then it will be removed from our Note state
  // and we will give new collection of note to state

  Delete(e, id) {
    this.state.storage.length == 1 &&
      this.setState((prevState) => {
        return {
          ...prevState,
          Description: {
            ...prevState.Description,
            desc: "....description",
            pass: true,
          },
        };
      });

    if (
      id + 1 === this.state.start &&
      this.state.start != 1 &&
      this.state.end === this.state.start
    ) {
      this.setState((prevstate) => ({
        ...prevstate,
        start: prevstate.start - 5,
      }));
    }

    const Temp = this.state.storage.filter((val, index) => index != id);

    this.setState((prevState) => {
      return {
        ...prevState,
        storage: [...Temp],
      };
    });
  }

  // Lets Edit our data on real time

  // I think this is where i having fun in coding
  // Onclick edit icon it will going to be run

  //     my text container i.e,div.noteBox will going to display: none and it will be replaced with input tag with old text and here we can write new value so after that its value will transfer to text container back and ofcourse we have to change in state too so it can reflect after rendering otherwise on render it will be as previous value

  Edit(e, id) {
    this.elem = document.getElementById("parent" + id);
    this.elem.childNodes[1].style.display = "none";
    this.inputelem = document.createElement("input");
    this.inputelem.style.flex = "1";
    this.inputelem.value = this.elem.childNodes[1].innerText;
    this.inputelem.setAttribute("id", id.toString());
    this.inputelem.setAttribute("class", "edit");
    this.inputelem.onblur = (e) => {
      this.onblur(e, id);
    };
    this.elem.childNodes[0].after(this.inputelem);
    this.inputelem.focus();
  }

  // it is handled by onblur event

  onblur(e, id) {
    id == this.state.Description.id &&
      this.setState((prevState) => {
        return {
          ...prevState,
          Description: { ...prevState.Description, desc: e.target.value },
        };
      });

    this.elem.childNodes[2].style.display = "block";
    this.RES_2 = this.state.storage.map(function (item, index) {
      return index !== id ? item : e.target.value;
    });

    let storageObj = this.state.storage.map((val, index) => {
      return index != id
        ? val
        : {
            message: e.target.value,
            status: val.status,
          };
    });

    e.target.remove();
    this.setState((prevState) => {
      return {
        ...prevState,
        storage: [...storageObj],
      };
    });
  }

  // DescriptionHandler act when click on noteBox

  descriptionHandler(event, id) {
    this.setState((prevState) => {
      return {
        ...prevState,
        Description: { desc: event.target.innerText, pass: true, id: id },
      };
    });
  }

  render() {
    localStorage.setItem("myStore", JSON.stringify(this.state.storage));
    return (
      <>
        <div className="container">
          <div className="App">
            <section className="first">
              <input
                id="note"
                type="text"
                className="form-control"
                placeholder=" Note here"
                required
                onKeyPress={(e) => {
                  e.key === "Enter" && this.InputRef.current.click();
                }}
              />
              <button className="btn" onClick={this.add} ref={this.InputRef}>
                ADD
              </button>
              <hr />
            </section>
            <section className="second">{this.Update()}</section>
            <footer>
              <Button
                Prev={this.Prev}
                Next={this.Next}
                length={this.state.end}
              />
            </footer>
          </div>

          <div className="note_Desc_Hanger">
            <h4>Description</h4>
            <hr />

            <p id="description">{this.state.Description.desc}</p>
          </div>
        </div>
      </>
    );
  }
}
export default TO_DO;
