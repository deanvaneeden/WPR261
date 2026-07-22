// Comparison data
        const legends = {
            chris: {
                name: "Chris Norton",
                position: "Hooker",
                years: "1991–2003",
                highlights: "International tours, Club Championships"
            },
            riley: {
                name: "Riley Norton",
                position: "Forward",
                years: "2020–Present",
                highlights: "Varsity Cup squad, balancing study and sport"
            }
        };

        // Function to render comparison
        function renderComparison(selectId, tileId) {
            const selected = document.getElementById(selectId).value;
            const legend = legends[selected];
            document.getElementById(tileId).innerHTML = `
                <h3>${legend.name}</h3>
                <p><strong>Position:</strong> ${legend.position}</p>
                <p><strong>Years Active:</strong> ${legend.years}</p>
                <p><strong>Highlights:</strong> ${legend.highlights}</p>
            `;
        }

        // Event listeners
        document.getElementById("compareSelect1").addEventListener("change", () => {
            renderComparison("compareSelect1", "compareTile1");
        });
        document.getElementById("compareSelect2").addEventListener("change", () => {
            renderComparison("compareSelect2", "compareTile2");
        });

        // Initial render
        renderComparison("compareSelect1", "compareTile1");
        renderComparison("compareSelect2", "compareTile2");
    