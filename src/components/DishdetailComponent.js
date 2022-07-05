import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, List } from "reactstrap";

export default class Dishdetail extends Component {
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>
              <h4>{dish.name}</h4>
            </CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }
  renderComments(dish) {
    if (dish != null)
      return (
        <>
          <h3>Comments</h3>
          <List type="unstyled">
            {dish.comments.map((c) => {
              return (
                <li key={c.id}>
                  <h4>{c.comment}</h4>
                  <p>
                    --{c.author}, {c.date}
                  </p>
                </li>
              );
            })}
          </List>
        </>
      );
    else return <div></div>;
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-5">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-sm-7">
          {this.renderComments(this.props.selectedDish)}
        </div>
      </div>
    );
  }
}
