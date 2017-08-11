

        function download() {
                var dt = document.getElementById("HexCanvas").toDataURL('image/jpeg');
                this.href = dt;
        };

        document.getElementById("download").addEventListener('click', download, false);

        function redraw() {

            var width = Number(document.getElementById("hw").value);
            var rows = Number(document.getElementById("hr").value);
            var cols = Number(document.getElementById("hc").value);

            var stupidMath = ((Math.sqrt(Math.pow(width,2) - Math.pow((width/2),2))) * 2)

            var    heightNeeded = stupidMath * rows + (stupidMath / 2);


            var widthNeeded = cols * (width * 1.5) + width * .5;

            console.log("widthneeded: " + widthNeeded+ ", heightneeded: " + heightNeeded);

            document.getElementById("CANVASHOLDER").innerHTML = "<canvas id='HexCanvas' width='"+ widthNeeded +"' height='"+heightNeeded+"'></canvas>";

            var canvas = document.getElementById("HexCanvas");
            var context = canvas.getContext("2d");
            context.clearRect(0, 0, canvas.width, canvas.height);


            hexagonGrid = new HexagonGrid("HexCanvas", width, rows, cols);
            hexagonGrid.drawHexGrid(rows, cols, 0, 0, false)
            console.log("width: " + width + ", rows: " + rows + ", cols: " + cols);
        }

        function setColor(color) {
            hexagonGrid.setDrawColor(color);
        }
