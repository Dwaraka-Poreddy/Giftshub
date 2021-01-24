import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import $ from "jquery";
const allComp = [
  {
    id: "magazine",
    ismailsent: false,
    content: "Magazine",
    url: "",
    img:
      "https://img.timeinc.net/time/images/covers/asia/2012/20121105_600.jpg",
  },
  {
    id: "challenge",
    ismailsent: false,
    content: "Challenge",
    url: "",
    img:
      "https://img.timeinc.net/time/images/covers/asia/2012/20121105_600.jpg",
  },
  {
    id: "aboutquiz",
    ismailsent: false,
    content: "About Quiz",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fmemo.PNG?alt=media&token=beeb8d64-7501-4051-91e9-d15ba8977de4",
  },
  {
    id: "calendar",
    ismailsent: false,
    content: "Calendar",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FthreeDsqr.PNG?alt=media&token=89f9386d-931d-4642-a744-761ef2b97f2d",
  },
  {
    id: "threedcarousel",
    ismailsent: false,
    content: "3D Carousel",
    url: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60_0gL8ZRN3M91p7rKmcrV8mU_hL3bbejKA&usqp=CAU",
  },
  {
    id: "honeycomb",
    ismailsent: false,
    content: "Honey Comb ",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FAnimatedFrames.PNG?alt=media&token=349119f7-5722-4887-8bd7-c4586f916f94",
  },
  {
    id: "journey",
    ismailsent: false,
    content: "Journey",
    url: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBz4nl3tuB44qN7Y6k4Kl-N4bf2M9ZX7CPUg&usqp=CAU",
  },
  {
    id: "swatchbook",
    ismailsent: false,
    content: "Swatch Book",
    url: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBz4nl3tuB44qN7Y6k4Kl-N4bf2M9ZX7CPUg&usqp=CAU",
  },
  {
    id: "puzzle",
    ismailsent: false,
    content: "Slide Puzzle",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Ftom-and-jerry-hd-background.jpg?alt=media&token=a5fb8323-7899-46d7-8119-16b69e1e2531",
  },
  {
    id: "specialcard",
    ismailsent: false,
    content: "Special Card",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FSpecialCard.PNG?alt=media&token=1fdfb6d2-3bcd-42e7-b10c-4537a10b914a",
  },
  {
    id: "animatedframe",
    ismailsent: false,
    content: "Animated Frame ",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FAnimatedFrames.PNG?alt=media&token=349119f7-5722-4887-8bd7-c4586f916f94",
  },
  {
    id: "threedimage",
    ismailsent: false,
    content: "3D Image",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FthreeDsqr.PNG?alt=media&token=89f9386d-931d-4642-a744-761ef2b97f2d",
  },
  {
    id: "greetingcard",
    ismailsent: false,
    content: "Greeting Card",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FGreeting.PNG?alt=media&token=6ee929be-de78-4b21-a046-ed716c52b8da",
  },
  {
    id: "cubes",
    ismailsent: false,
    content: " 3D Heart",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FCubessqare.PNG?alt=media&token=5d65ad64-985a-4335-9274-da1fdc115f5e",
  },
  {
    id: "memorygame",
    ismailsent: false,
    content: "Memory Game",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fmemo.PNG?alt=media&token=beeb8d64-7501-4051-91e9-d15ba8977de4",
  },
  {
    id: "collage",
    ismailsent: false,
    content: "Collage",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FcollagePNG.PNG?alt=media&token=145fccf1-8bc0-4615-9ebf-8dc87fdfcae0",
  },
  {
    id: "newspaper",
    ismailsent: false,
    content: "NewsPaper",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fpersonalisednewspapersq-9918857eg.jpg?alt=media&token=48bf0687-fa71-471d-acc3-207f346dd1b9",
  },
];

const selectComp = [];

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
$(document).ready(function () {
  $(".card").hover(
    function () {
      $(this).removeClass("shadow-none");
      $(this).addClass("shadow");
    },
    function () {
      $(this).removeClass("shadow");
      $(this).addClass("shadow-none");
    }
  );

  // document ready
});
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",

  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});
const getItemStyle1 = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",

  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "green",

  // styles we need to apply on draggables
  ...draggableStyle,
});
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  minHeight: 150,
});
const getListStyle1 = (isDraggingOver) => ({
  background: isDraggingOver ? "lightgreen" : "#70cff3",
  padding: grid,
  minHeight: 150,
});
class N_Pack_Select extends Component {
  state = {
    items: allComp,
    selected: selectComp,
  };

  id2List = {
    droppable: "items",
    droppable2: "selected",
  };

  getList = (id) => this.state[this.id2List[id]];

  onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      if (source.droppableId === "droppable2") {
        state = { selected: items };
      }

      this.setState(state);
      this.props.setpackfunc(this.state.selected);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      this.setState({
        items: result.droppable,
        selected: result.droppable2,
      });
      this.props.setpackfunc(this.state.selected);
    }
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div class="row">
          <div class="col-lg-8   ">
            <center>
              <h3>All Gifts</h3>
            </center>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {" "}
                  <div className="container-fluid">
                    <div className="row">
                      {this.state.items.map((item, index) => (
                        <div
                          class="col-sm-6 col-md-4 col-lg-3 p-1"
                          // style={{ height: "235px" }}
                        >
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(
                                  snapshot.isDragging,
                                  provided.draggableProps.style
                                )}
                              >
                                <div class="card">
                                  <img
                                    style={{ height: "100%" }}
                                    class="card-img-top"
                                    // src={item.img}
                                    src="https://picsum.photos/200/200"
                                    alt={index}
                                  />

                                  <h5 class="card-title"> {item.content}</h5>
                                </div>
                              </div>
                            )}
                          </Draggable>{" "}
                        </div>
                      ))}
                    </div>
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div class="col-lg-4  ">
            <center>
              <h3>Your Pack</h3>
            </center>
            <Droppable droppableId="droppable2">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle1(snapshot.isDraggingOver)}
                >
                  {this.state.selected.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle1(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <div
                            class="card p-0 shadow-none"
                            style={{ color: "red" }}
                          >
                            <div class="row no-gutters">
                              <div class="col-3">
                                <img
                                  style={{ width: "50%" }}
                                  src="https://picsum.photos/100/100"
                                  // src={item.img}
                                  class="card-img"
                                  alt={index}
                                />
                              </div>
                              <div class="col-9">
                                <div
                                  class="card-body "
                                  style={{
                                    padding: "1rem 1.25rem ",
                                  }}
                                >
                                  {item.content}-Day {index}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    );
  }
}
export default N_Pack_Select;
