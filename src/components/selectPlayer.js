import React from "react";

class Player extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.player(e.target.player.value);
    }

    render() {
        return (

            <form className="formClass" onSubmit={(e) => this.handleSubmit(e)}>
                <label className="mr-4">

                    <input type="radio" name="player" value="X" className="mr-2" />
                    Player X
                    </label>
                <label>
                    <input type="radio" name="player" value="O" className="mr-2" />
                    Player O

                </label>
                <br></br>
                <input className="mt-2" type="submit" value="start" />
            </form>

        )
    }
}

export default Player;