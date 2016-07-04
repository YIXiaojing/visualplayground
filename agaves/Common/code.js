id;
try {
    function transpose(a) {
        var w = a.length ? a.length : 0,
            h = a[0] instanceof Array ? a[0].length : 0;
        if (h === 0 || w === 0) { return []; }
        var i, j, t = [];
        for (i = 0; i < h; i++) {
            t[i] = [];
            for (j = 0; j < w; j++) {
                t[i][j] = a[j][i];
            }
        }

        return t;
    };

    function create(roleHeaders, columns, values, caps) {
        var cats = [];
        var vals = [];
        var role = {}
        roles = [];

        for (i = 0; i < roleHeaders.length; i++) {
            if (i < caps.dataRoles.length) {
                roles.push(caps.dataRoles[i]);
            } else {
                roles.push(caps.dataRoles[caps.dataRoles.length - 1]);
            }
        }

        var cC = 0;
        for (var i = 0; i < roles.length; i++) {
            if (roles[i].kind === 1) {
                break;
            }
            var role = {};
            role[roles[i].name] = true;
            cats.push({
                source: {
                    displayName: roleHeaders[i],
                    queryName: "q" + i,
                    type: roles[i].kind !== 1 ? { text: true } : { numeric: true },
                    roles: role,
                },
                values: i == 0 ? columns : values[i - 1]
            })

            cC++;

        }
        for (var i = cC; i < roles.length; i++) {
            var role = {};
            role[roles[i].name] = true;
            vals.push({
                source: {
                    displayName: roleHeaders[i],
                    isMeasure: roles[i].kind === 1,
                    format: "",
                    queryName: "q" + i,
                    type: roles[i].kind !== 1 ? { text: true } : { numeric: true },
                    roles: role,
                },
                values: values[i - 1]
            })
        }

        return [cats, vals]
    }

    function draw(name, data, height, width) {
        hostel = $('#host');
        height = height || $(window).height();
        width = width || $(window).width();

        if (!viz) {
            var host = new powerbi.visuals.DefaultVisualHostServices();
            var defaultInitOptions = { element: hostel, host: host, style: powerbi.visuals.visualStyles.create(), viewport: {} };

            hostel.empty()
            viz = powerbi.visuals.plugins[name].create();
            viz.init(defaultInitOptions);
        }
        var atod = data || new powerbitests.customVisuals.sampleDataViews.ArrayToDataview(series(), cats())
        dv = atod.getDataView()
        //fail(dv.table.rows);
        dvs = [dv]
        update();
    }

    // OFFICE

    //window.bindingId = 'myBinding';
    var binding = null;
    var viz;
    var definition;

    function fail(result) {
        var status = JSON.stringify(result);
        $('#console').append($('<div>' + status + '</div>'));
    }

    function update() {
        var height = $(window).height();
        var width = $(window).width();
        if (!viz) return;
        if (viz.update) {
            viz.update({ dataViews: dvs, viewport: { height: height, width: width } });
        } else {
            viz.onDataChanged({ dataViews: dvs });
            viz.onResizing({ height: height, width: width })
        }
    }

    function display(data) {
        //fail({data:data});
        var name = id;
        //data = [['R1','R2', 'R2'],['Monday',1,2],['Tuesday',2,3]];
        var roles = data[0];
        var tArr = transpose(data.slice(1));
        var re = create(roles, tArr[0], tArr.slice(1), powerbi.visuals.plugins[name].capabilities);
        var data2 = new powerbitests.customVisuals.sampleDataViews.ArrayToDataview(re[1], re[0])
        draw(name, data2)
    }

    function displayDataForBinding(binding) {
        binding.getDataAsync(
            {
                coercionType: Office.CoercionType.Matrix, valueFormat: Office.ValueFormat.Unformatted, filterType: Office.FilterType.OnlyVisible
            },
            function (result) {
                if (result.status === Office.AsyncResultStatus.Succeeded) {
                    display(result.value);
                }
                else {
                    fail(result);
                }
            });
    }

    function displayData() {
        Office.context.document.bindings.getByIdAsync(
            window.bindingId,
            function (result) {
                if (result.status === Office.AsyncResultStatus.Succeeded) {
                    binding = result.value;
                    displayDataForBinding(binding);
                    binding.addHandlerAsync(
                        Office.EventType.BindingDataChanged,
                        function () {
                            displayDataForBinding(binding);
                        });
                }
                else {
                    fail(result);
                }
            });
    }

    Office.initialize = function (reason) {
        $(document).ready(function () {
            //$('#console').remove();
           
            // link up a button to allow the user to change the binding
            $("#get-data").click(function () {
                Office.context.document.bindings.addFromPromptAsync(
                    Office.BindingType.Table,
                    { id: window.bindingId },
                    function (result) {
                        if (result.status === Office.AsyncResultStatus.Succeeded) {
                            displayData();
                        }
                        else {
                            fail(result);
                        }
                    });
            });

            // See if we already have a binding set
            Office.context.document.bindings.getByIdAsync(
                window.bindingId,
                function (result) {
                    if (result.status === Office.AsyncResultStatus.Succeeded) {
                        displayData()
                    }
                    else {
                        // bind to the current selection                    
                        Office.context.document.bindings.addFromSelectionAsync(
                            Office.BindingType.Table,
                            { id: window.bindingId },
                            function (result) {
                                if (result.status === Office.AsyncResultStatus.Succeeded) {
                                    displayData();
                                }
                                else {
                                    fail(result);
                                }
                            });
                    }
                });


            $(window).resize(function () {
                update();
            });
        });


    }

} catch (e) {
    //fail(e);
}   