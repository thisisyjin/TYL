import { Component } from "react";
import ColorContext from "../contexts/color";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
    static contextType = ColorContext;

    onClickColor = color => {
        this.context.actions.setColor(color);
    }

    onRightClickColor = subcolor => {
        this.context.actions.setSubcolor(subcolor);
    }


    render() {
        return (
            <div>
                <h2>색상을 선택하세요.</h2>
                <div style={{ display: 'flex' }}>
                    {colors.map(color =>
                    (<div
                        key={color}
                        style={{
                            background: color,
                            width: '24px',
                            height: '24px',
                            cursor: 'pointer',
                        }}
                        onClick={() => this.onClickColor(color)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            this.onRightClickColor(color);
                        }}
                    />
                    ))}
                </div>
                <hr />
            </div>
        );
    }
}

export default SelectColors;