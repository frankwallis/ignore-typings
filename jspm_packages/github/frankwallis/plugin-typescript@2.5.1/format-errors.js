/* */ 
System.register(['typescript'], function(exports_1) {
    var ts;
    function formatErrors(diags, logger) {
        diags.slice(0, 10)
            .forEach(function (diag) {
            if (diag.file) {
                var position = diag.file.getLineAndCharacterOfPosition(diag.start);
                var filename = diag.file.fileName;
                var locationText = filename + ":" + (position.line + 1) + ":" + (position.character + 1);
                if (diag.category === ts.DiagnosticCategory.Error)
                    logger.error(locationText);
                else
                    logger.warn(locationText);
            }
            var messageText = ts.flattenDiagnosticMessageText(diag.messageText, "\n");
            messageText = messageText + " (TS" + diag.code + ")";
            if (diag.category === ts.DiagnosticCategory.Error)
                logger.error(messageText);
            else
                logger.warn(messageText);
        });
    }
    exports_1("formatErrors", formatErrors);
    return {
        setters:[
            function (ts_1) {
                ts = ts_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWVycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9mb3JtYXQtZXJyb3JzLnRzIl0sIm5hbWVzIjpbImZvcm1hdEVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7SUFPQSxzQkFBNkIsS0FBc0IsRUFBRSxNQUFjO1FBRWxFQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTthQUNoQkEsT0FBT0EsQ0FBQ0EsVUFBQUEsSUFBSUE7WUFDWkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRWZBLElBQU1BLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLDZCQUE2QkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JFQSxJQUFNQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtnQkFHcENBLElBQU1BLFlBQVlBLEdBQU1BLFFBQVFBLFVBQUlBLFFBQVFBLENBQUNBLElBQUlBLEdBQUdBLENBQUNBLFdBQUlBLFFBQVFBLENBQUNBLFNBQVNBLEdBQUdBLENBQUNBLENBQUVBLENBQUNBO2dCQUVsRkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsS0FBS0EsRUFBRUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxLQUFLQSxDQUFDQTtvQkFDakRBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO2dCQUM1QkEsSUFBSUE7b0JBQ0hBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO1lBQzVCQSxDQUFDQTtZQUVEQSxJQUFJQSxXQUFXQSxHQUFHQSxFQUFFQSxDQUFDQSw0QkFBNEJBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBQzFFQSxXQUFXQSxHQUFNQSxXQUFXQSxZQUFPQSxJQUFJQSxDQUFDQSxJQUFJQSxNQUFHQSxDQUFDQTtZQUVoREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsS0FBS0EsRUFBRUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxLQUFLQSxDQUFDQTtnQkFDakRBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO1lBQzNCQSxJQUFJQTtnQkFDSEEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLENBQUNBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0lBMUJELHVDQTBCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi9cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5cbi8qKlxuICogV3JpdGUgdGhlIGNvbXBpbGVyIGVycm9ycyB0byBjb25zb2xlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRFcnJvcnMoZGlhZ3M6IHRzLkRpYWdub3N0aWNbXSwgbG9nZ2VyOiBMb2dnZXIpIHtcblx0Ly8gZmVhdHVyZTogZG9uJ3Qgc3BhbSB0aGUgY29uc29sZSwgb25seSBkaXNwbGF5IHRoZSBmaXJzdCAxMCBlcnJvcnNcblx0ZGlhZ3Muc2xpY2UoMCwgMTApXG5cdFx0LmZvckVhY2goZGlhZyA9PiB7XG5cdFx0XHRpZiAoZGlhZy5maWxlKSB7XG5cdFx0XHRcdC8vIGZlYXR1cmU6IHByaW50IHRoZSBjb21waWxlciBvdXRwdXQgb3ZlciAyIGxpbmVzISBmaWxlIHRoZW4gbWVzc2FnZVxuXHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IGRpYWcuZmlsZS5nZXRMaW5lQW5kQ2hhcmFjdGVyT2ZQb3NpdGlvbihkaWFnLnN0YXJ0KTtcblx0XHRcdFx0Y29uc3QgZmlsZW5hbWUgPSBkaWFnLmZpbGUuZmlsZU5hbWU7XG5cblx0XHRcdFx0Ly8gZmVhdHVyZTogb3V0cHV0IGluIGZvcm1hdCBhZGRyZXNzOmxpbmU6cG9zaXRpb24gdG8gZW5hYmxlIGRpcmVjdCBsaW5raW5nIHRvIGVycm9yIGxvY2F0aW9uIGluIGNocm9tZSBkZXYgdG9vbHNcblx0XHRcdFx0Y29uc3QgbG9jYXRpb25UZXh0ID0gYCR7ZmlsZW5hbWV9OiR7cG9zaXRpb24ubGluZSArIDF9OiR7cG9zaXRpb24uY2hhcmFjdGVyICsgMX1gO1xuXG5cdFx0XHRcdGlmIChkaWFnLmNhdGVnb3J5ID09PSB0cy5EaWFnbm9zdGljQ2F0ZWdvcnkuRXJyb3IpXG5cdFx0XHRcdFx0bG9nZ2VyLmVycm9yKGxvY2F0aW9uVGV4dCk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRsb2dnZXIud2Fybihsb2NhdGlvblRleHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgbWVzc2FnZVRleHQgPSB0cy5mbGF0dGVuRGlhZ25vc3RpY01lc3NhZ2VUZXh0KGRpYWcubWVzc2FnZVRleHQsIFwiXFxuXCIpO1xuXHRcdFx0bWVzc2FnZVRleHQgPSBgJHttZXNzYWdlVGV4dH0gKFRTJHtkaWFnLmNvZGV9KWA7XG5cblx0XHRcdGlmIChkaWFnLmNhdGVnb3J5ID09PSB0cy5EaWFnbm9zdGljQ2F0ZWdvcnkuRXJyb3IpXG5cdFx0XHRcdGxvZ2dlci5lcnJvcihtZXNzYWdlVGV4dCk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGxvZ2dlci53YXJuKG1lc3NhZ2VUZXh0KTtcblx0XHR9KTtcbn1cbiJdfQ==