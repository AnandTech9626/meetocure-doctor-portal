
        let documents = [
            { name: "Medical Report.pdf", date: "Feb 20, 2025", url: "files/medical_report.pdf" },
            { name: "Prescription.docx", date: "Feb 18, 2025", url: "files/prescription.docx" },
            { name: "Lab Results.xlsx", date: "Feb 15, 2025", url: "files/lab_results.xlsx" },
            { name: "Scan Report.jpg", date: "Feb 10, 2025", url: "files/scan_report.jpg" },
            { name: "Medical Report.pdf", date: "Feb 20, 2025", url: "files/medical_report.pdf" },
            { name: "Prescription.docx", date: "Feb 18, 2025", url: "files/prescription.docx" },

            { name: "Scan Report.jpg", date: "Feb 10, 2025", url: "files/scan_report.jpg" },
            { name: "Discharge Summary.pdf", date: "Feb 5, 2025", url: "files/discharge_summary.pdf" }
        ];

        let recycleBin = [];
        let selectedDocumentIndex = null;
        let selectedList = "main"; // "main" or "recycleBin"

        function loadDocuments() {
            const docList = document.getElementById("documents-list");
            docList.innerHTML = "";
            documents.forEach((doc, index) => {
                let docItem = document.createElement("div");
                docItem.className = "flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm mt-2 doc-item";
                docItem.setAttribute("data-index", index);
                
                docItem.innerHTML = `
                    <div class="flex items-center gap-3">
                        <i class="fas fa-file-alt text-blue-500 text-2xl"></i>
                        <div>
                            <p class="font-medium">${doc.name}</p>
                            <p class="text-sm text-gray-500">Uploaded: ${doc.date}</p>
                        </div>
                    </div>
                `;

                docItem.addEventListener("contextmenu", (event) => {
                    event.preventDefault();
                    showContextMenu(event, index, "main");
                });

                docList.appendChild(docItem);
            });
        }

        function loadRecycleBin() {
            const binList = document.getElementById("recycle-bin-list");
            binList.innerHTML = "";
            recycleBin.forEach((doc, index) => {
                let binItem = document.createElement("div");
                binItem.className = "flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm mt-2 doc-item";
                binItem.setAttribute("data-index", index);

                binItem.innerHTML = `
                    <div class="flex items-center gap-3">
                        <i class="fas fa-file-alt text-gray-500 text-2xl"></i>
                        <div>
                            <p class="font-medium">${doc.name}</p>
                            <p class="text-sm text-gray-500">Deleted: ${doc.date}</p>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <button class="text-green-600" onclick="restoreDocument(${index})">🔄 Restore</button>
                        <button class="text-red-600" onclick="permanentlyDelete(${index})">❌ Delete</button>
                    </div>
                `;

                binList.appendChild(binItem);
            });
        }

        function showContextMenu(event, index, list) {
            selectedDocumentIndex = index;
            selectedList = list;
            const contextMenu = document.getElementById("context-menu");
            contextMenu.style.top = `${event.clientY}px`;
            contextMenu.style.left = `${event.clientX}px`;
            contextMenu.style.display = "block";
        }

        function hideContextMenu() {
            document.getElementById("context-menu").style.display = "none";
        }

        function downloadDocument() {
            let doc = selectedList === "main" ? documents[selectedDocumentIndex] : recycleBin[selectedDocumentIndex];

            let link = document.createElement("a");
            link.href = doc.url;
            link.download = doc.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            hideContextMenu();
        }

        function moveToRecycleBin() {
            recycleBin.push(documents[selectedDocumentIndex]);
            documents.splice(selectedDocumentIndex, 1);
            loadDocuments();
            loadRecycleBin();
            hideContextMenu();
        }

        function restoreDocument(index) {
            documents.push(recycleBin[index]);
            recycleBin.splice(index, 1);
            loadDocuments();
            loadRecycleBin();
        }

        function permanentlyDelete(index) {
            recycleBin.splice(index, 1);
            loadRecycleBin();
        }

        document.addEventListener("click", hideContextMenu);
        loadDocuments();
