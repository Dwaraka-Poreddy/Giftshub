import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import $ from "jquery";
const allComp = [
  {
    id: "puzzle",
    content: "Slide Puzzle",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fsqpuz.PNG?alt=media&token=4effacbd-c53b-4d32-9376-6e74caa8a491",
  },
  {
    id: "threedimage",
    content: "3D Image",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2F3dsqr.png?alt=media&token=1f1a6ebc-f70f-4bb9-bd88-217610ab2373",
  },
  {
    id: "greetingcard",
    content: "Greeting Card",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fgreeting.PNG?alt=media&token=8a7a1015-4440-40e9-a001-a5643609c058",
  },
  {
    id: "cubes",
    content: "Cubes in 3D Heart",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FCubessqare.PNG?alt=media&token=5d65ad64-985a-4335-9274-da1fdc115f5e",
  },
  {
    id: "memorygame",
    content: "Memory Game",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fmemo.PNG?alt=media&token=beeb8d64-7501-4051-91e9-d15ba8977de4",
  },
  {
    id: "collage",
    content: "Collage",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FcollagePNG.PNG?alt=media&token=145fccf1-8bc0-4615-9ebf-8dc87fdfcae0",
  },
  {
    id: "newspaper",
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
  console.log("ready");
  $(".card").hover(
    function () {
      console.log("ready shadow");
      $(this).removeClass("shadow-none");
      $(this).addClass("shadow").css("cursor", "pointer");
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
  width: 250,
  minHeight: 150,
});
const getListStyle1 = (isDraggingOver) => ({
  background: isDraggingOver ? "green" : "lightgreen",
  padding: grid,
  width: 250,
  minHeight: 150,
});
class N_Pack_Select extends Component {
  state = {
    items: allComp,
    selected: selectComp,
  };

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
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

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div class="row">
          <div class="col-lg-6 pt-3 ">
            <center>
              <h1> Pack</h1>
            </center>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {this.state.items.map((item, index) => (
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
                          <div class="card p-0 shadow-none">
                            <div class="row no-gutters">
                              <div class="col-3">
                                <img
                                  style={{ height: "100%" }}
                                  src={item.img}
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
                                  {item.content}
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

          <div class="col-lg-6 pt-3 pb-3 ">
            <center>
              <h1>Your Pack</h1>
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
                          <div class="card p-0 shadow-none">
                            <div class="row no-gutters">
                              <div class="col-3">
                                <img
                                  style={{ height: "100%" }}
                                  src={item.img}
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
                                  {item.content}
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
