var lines = sc.textFile("README.md")
lines.count()
var newlines = lines.filter(line => line.contains("Scala"))
newlines.first()
newlines.persist()