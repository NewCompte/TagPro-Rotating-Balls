tagpro.ready(function(){
    //This is important.
    if(tagpro.events.drawPlayer)
        return;

    tagpro.events.register({
        drawPlayer: function(player, context, drawPos, TILESIZE) {
            context.save();
            context.translate(drawPos.x + (TILESIZE / 2) * (1 / tagpro.zoom), drawPos.y + (TILESIZE / 2) * (1 / tagpro.zoom));
            context.rotate(player.angle)
            context.translate(-drawPos.x - (TILESIZE / 2) * (1 / tagpro.zoom), -drawPos.y - (TILESIZE / 2) * (1 / tagpro.zoom));
            
            tagpro.tiles.drawWithZoom(context, player.team == 1 ? "redball" : "blueball", drawPos);

            if (player.bomb && Math.round(Math.random() * 4) == 1) {
                context.fillStyle = "rgba(255, 255, 0, .50)";
                context.beginPath();
                context.arc(drawPos.x + (TILESIZE / 2) * (1 / tagpro.zoom), drawPos.y + (TILESIZE / 2) * (1 / tagpro.zoom), 20  * (1 / tagpro.zoom), 0, Math.PI*2, true);
                context.closePath();
                context.fill();
            };

            if (player.tagpro) {
                context.strokeStyle = "#00FF00";
                context.fillStyle = "rgba(0, 255, 0, .25)";
                context.lineWidth = 3 * (1 / tagpro.zoom);
                context.beginPath();
                context.arc(drawPos.x + (TILESIZE / 2) * (1 / tagpro.zoom), drawPos.y + (TILESIZE / 2) * (1 / tagpro.zoom), 20  * (1 / tagpro.zoom), 0, Math.PI*2, true);
                context.closePath();
                if (!player.bomb)
                    context.fill();
                context.stroke();
            }

            context.restore();
        }
    });
});
