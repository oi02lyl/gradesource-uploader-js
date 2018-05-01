import sys
fn = sys.argv[1]
print fn

res = 'var scores = {'
for line in open(fn):
    sp = line.strip().split('\t')
    if len(sp) < 2:
        continue
    res += '"%s" : "%s", ' % (sp[0].strip().upper(), sp[1].strip())

res += '};'
print res
