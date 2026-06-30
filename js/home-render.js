/**
 * Home Page — CSV Schedule Fetcher
 * Fetches the free-class schedule from a published Google Sheet
 * and renders it as an HTML table.
 */
(function() {
  var fetchAndRenderCsvTable, parseCsv;

  parseCsv = function(text) {
    var char, field, i, inQuotes, j, nextChar, row, rows;
    rows = [];
    row = [];
    field = "";
    inQuotes = false;
    for (i = j = 0, ref = text.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
      char = text[i];
      nextChar = text[i + 1];
      if (inQuotes) {
        if (char === '"' && nextChar === '"') {
          field += '"';
          i += 1;
        } else if (char === '"') {
          inQuotes = false;
        } else {
          field += char;
        }
      } else {
        if (char === '"') {
          inQuotes = true;
        } else if (char === ',') {
          row.push(field);
          field = "";
        } else if (char === '\r') {
          continue;
        } else if (char === '\n') {
          row.push(field);
          rows.push(row);
          row = [];
          field = "";
        } else {
          field += char;
        }
      }
    }
    if (field.length > 0 || row.length > 0) {
      row.push(field);
      rows.push(row);
    }
    return rows.filter(function(r) {
      return !(r.length === 1 && r[0] === "");
    });
  };

  fetchAndRenderCsvTable = async function(url) {
    var btn, cell, col, container, csvText, e, htr, idx, j, k, l, len, len1, len2, ref, ref1, response, row, rows, t, table, tbody, td, th, thead, tr, val;
    container = document.getElementById('csv-table-container');
    if (!container) {
      return;
    }
    container.innerHTML = '<p style="padding: 30px; margin: 0; color: var(--text-main)">Loading table, please wait...</p>';
    try {
      response = (await fetch(url, {
        mode: 'cors'
      }));
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      csvText = (await response.text());
      rows = parseCsv(csvText);
      if (rows.length === 0) {
        throw new Error("CSV empty");
      }
      table = document.createElement('table');
      table.className = 'schedule-table';

      // Header
      thead = document.createElement('thead');
      htr = document.createElement('tr');
      ref = rows[0];
      for (j = 0, len = ref.length; j < len; j++) {
        t = ref[j];
        th = document.createElement('th');
        th.textContent = t;
        htr.appendChild(th);
      }
      thead.appendChild(htr);

      // Body
      tbody = document.createElement('tbody');
      ref1 = rows.slice(1);
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        row = ref1[k];
        tr = document.createElement('tr');
        for (idx = l = 0, len2 = row.length; l < len2; idx = ++l) {
          cell = row[idx];
          td = document.createElement('td');
          col = (rows[0][idx] || "").trim().toLowerCase();
          if (col === "signup form") {
            val = cell.trim();
            btn = document.createElement('a');
            btn.className = "btn btn-primary";
            btn.textContent = "Sign up";
            btn.target = "_blank";
            btn.rel = "noopener";
            btn.href = /^https?:\/\//i.test(val) ? val : "contact.html";
            td.appendChild(btn);
          } else {
            td.textContent = cell;
          }
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }
      table.appendChild(thead);
      table.appendChild(tbody);
      container.innerHTML = "";
      return container.appendChild(table);
    } catch (error) {
      e = error;
      return container.innerHTML = '<div style="padding:30px; color:var(--accent);">Unable to load data.</div>';
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    var scheduleContainer = document.getElementById('csv-table-container');
    if (scheduleContainer) {
      fetchAndRenderCsvTable("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7KPcPrcFxZc3TgMAVjH3Zv3FCDdafdD9H8i6IznF0UKUNQ7mak4dyQb1f9jj2jruf1LGryXv3vsyJ/pub?gid=1658759406&single=true&output=csv");
    }
  });

}).call(this);
