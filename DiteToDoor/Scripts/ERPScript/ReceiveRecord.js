﻿
$(function () {
    var i = 1;
    var j = 1;
    $("#addRowRecc").click(function () {

        var isValid = true;
        if ($("#StoreList").val() == null || $("#StoreList").val() == 0) {
            toastr.warning('اختر المستودع ...!');
            isValid = false;

            return;
        }
        //$('#OrdersItems .ItemListCLS').each(function () {

        //    var OldItem = $(this).val();
        //    var NewItem = $("#ItemList").val();
        //    if (NewItem == OldItem) {
        //        toastr.warning('الصنف موجود بالفعل في الفاتورة')
        //        isValid = false;
        //    }
        //});

        //if ($("#ItemList").val() == ""||0) {
        //    toastr.warning('اختر الصنف ...!')
        //     isValid = false;
        //}
        //if ($("#Price").val().trim() == '' || $("#Price").val() == 0 || document.getElementById("ItemList").selectedIndex == 0) {
        //    toastr.warning('ادخل الصنف والسعر ...!')
        //    isValid = false;
        //}
        //if ($(".Qty").val().trim() == '' || 0) {
        //    toastr.warning('ادخل الكمية ...!')
        //    isValid = false;
        //}
   
        if (isValid) {
            var productID = document.getElementById("ItemList").value;
           
            var $newRow = $("#MainRow").clone().attr('id', "Row" + j);
            j++;
            $('.ItemListCLS', $newRow).val(productID);
         
            $('#addd', $newRow).removeAttr('hidden').addClass('remove').html('<i class="fa fa-trash"></i>').removeClass('newbtn waves-effect btn-add').removeAttr('hidden').addClass('btn-outline-danger');
            $('#UnitList,#ItemList,#Qty,#Price,#Total, #NotesD', $newRow).attr('disabled', false);
            $('#UnitList,#ItemList,#Qty,#Price,#Total, #NotesD', $newRow).removeAttr('id');
            $('span.error', $newRow).remove();
            $("#OrdersItems").append($newRow[0]).remove("#ItemCategoriesList");
            $("#OrdersItems #GroupHide").hide();
            $("#OrdersItems #ItemCode").show();
            $('#OrdersItems tr:last')
                .css("background-color", "white");
            //$(".select2-selection").attr('disabled', false);

            var $tr = $(this).closest('tr');
            var $lastTr = $('#OrdersItems tr:last');

            $lastTr.find('.select2-select').select2('destroy'); // Un-instrument original row

            //var $clone = $lastTr.clone(); // Clone row

            //$clone.find('td').each(function () { // Alter cloned ids
            //    // ...
            //});

            /*$tr.closest('tbody').append($clone); // Append clone*/

            $lastTr.find('.ItemListCLS').select2(); // Re-instrument original row
            $lastTr.find('.UnitList').select2(); // Re-instrument original row
            $lastTr.find('.selection').last().hide();
            $lastTr.find('.selection').eq(1).hide();

            $lastTr.find('.select2').last().css("display", "none");
            $lastTr.find('.select2').eq(2).css("display", "none");
            

            //document.getElementById("ItemCategoriesList").selectedIndex = 0;
            //document.getElementById("UnitList").selectedIndex = 0;
         
            //document.getElementById("ItemList").selectedIndex = 0;
            $.get("/ReceiveRecord/GetItemList", { ID: 0 }, function (data) {
                $("#ItemList").empty();
                $("#ItemList").append("<option> اختر الصنف  </option>")
                $.each(data, function (index, row) {

                    $("#ItemList").append("<option value='" + row.Id + "'>" + row.ItemNameAr + "</option>")
                });
            });

            $.get("/ReceiveRecord/GetItemGroupList", function (data) {
                $("#ItemCategoriesList").empty();
                $("#ItemCategoriesList").append("<option> اختر الصنف  </option>")
                $.each(data, function (index, row) {

                    $("#ItemCategoriesList").append("<option value='" + row.Id + "'>" + row.ItemgroupsName + "</option>")
                });
            });

            $.get("/ReceiveRecord/GetUintList", { ID: 0 }, function (data) {
                $("#UnitList").empty();
                $("#UnitList").append("<option> اختر الوحدة  </option>")
                $.each(data, function (index, row) {

                    $("#UnitList").append("<option value='" + row.Id + "'>" + row.UnitName + "</option>")
                });
            });


           
            $("#TbItem #MainRow #Price").val(0);
            $("#TbItem #MainRow #Qty").val(1);
            $("#TbItem #MainRow #Total").text('');
            $("#TbItem #MainRow #Disper").val(0);
            $("#TbItem #MainRow #DisValue").val(0);
            $("#TbItem #MainRow #Net").text('');
            $("#Price").val(0);
            $("#Qty").val(1);
            $("#Total").text('');
            $("#Disper").val(0);
            $("#DisValue").val(0);
            $("#Net").text('');
            $("#ItemNumber").val(0);
            $("#ItemBalance").val(0);

        }


    });

    $("#addEdit").click(function () {

        var isValid = true;
        if ($("#StoreList").val() == null || $("#StoreList").val() == 0) {
            toastr.warning('اختر المستودع ...!');
            isValid = false;

            return;
        }
        //$('#OrdersItems .ItemListCLS').each(function () {

        //    var OldItem = $(this).val();
        //    var NewItem = $("#ItemList").val();
        //    if (NewItem == OldItem) {
        //        toastr.warning('الصنف موجود بالفعل في الفاتورة')
        //        isValid = false;
        //    }
        //});

        //if ($("#ItemList").val() == ""||0) {
        //    toastr.warning('اختر الصنف ...!')
        //     isValid = false;
        //}
        //if ($("#Price").val().trim() == '' || $("#Price").val() == 0 || document.getElementById("ItemList").selectedIndex == 0) {
        //    toastr.warning('ادخل الصنف والسعر ...!')
        //    isValid = false;
        //}
        //if ($(".Qty").val().trim() == '' || 0) {
        //    toastr.warning('ادخل الكمية ...!')
        //    isValid = false;
        //}

        if (isValid) {
            var productID = document.getElementById("ItemList").value;

            var $newRow = $("#MainRow").clone().attr('id', "Row" + i);
            i++;
            $('.ItemListCLS', $newRow).val(productID);

            $('#add', $newRow).addClass('remove').html('<i class="fa fa-trash"></i>').removeClass('newbtn waves-effect btn-add').removeAttr('hidden').addClass('btn-outline-danger');
            $('#UnitList,#ItemList,#Qty,#Price,#Total, #NotesD', $newRow).attr('disabled', false);
            $('#UnitList,#ItemList,#Qty,#Price,#Total,#NotesD', $newRow).removeAttr('id');
            $('span.error', $newRow).remove();
            $("#OrdersItems").append($newRow[0]).remove("#ItemCategoriesList");
            $("#OrdersItems #GroupHide").hide();
            $("#OrdersItems #ItemCode").show();
            $('#OrdersItems tr:last')
                .css("background-color", "white");
            //$(".select2-selection").attr('disabled', false);

            var $tr = $(this).closest('tr');
            var $lastTr = $('#OrdersItems tr:last');

            $lastTr.find('.select2-select').select2('destroy'); // Un-instrument original row

            //var $clone = $lastTr.clone(); // Clone row

            //$clone.find('td').each(function () { // Alter cloned ids
            //    // ...
            //});

            /*$tr.closest('tbody').append($clone); // Append clone*/

            $lastTr.find('.ItemListCLS').select2(); // Re-instrument original row
            $lastTr.find('.UnitList').select2(); // Re-instrument original row
            $lastTr.find('.selection').last().hide();
            $lastTr.find('.selection').eq(2).hide();

            $lastTr.find('.select2').last().css("display", "none");
            $lastTr.find('.selection').eq(2).css("display", "none");


            //document.getElementById("ItemCategoriesList").selectedIndex = 0;
            //document.getElementById("UnitList").selectedIndex = 0;

            //document.getElementById("ItemList").selectedIndex = 0;
            $.get("/ReceiveRecord/GetItemList", { ID: 0 }, function (data) {
                $("#ItemList").empty();
                $("#ItemList").append("<option> اختر الصنف  </option>")
                $.each(data, function (index, row) {

                    $("#ItemList").append("<option value='" + row.Id + "'>" + row.ItemNameAr + "</option>")
                });
            });

            $.get("/ReceiveRecord/GetItemGroupList", function (data) {
                $("#ItemCategoriesList").empty();
                $("#ItemCategoriesList").append("<option> اختر الصنف  </option>")
                $.each(data, function (index, row) {

                    $("#ItemCategoriesList").append("<option value='" + row.Id + "'>" + row.ItemgroupsName + "</option>")
                });
            });

            $.get("/ReceiveRecord/GetUintList", { ID: 0 }, function (data) {
                $("#UnitList").empty();
                $("#UnitList").append("<option> اختر الوحدة  </option>")
                $.each(data, function (index, row) {

                    $("#UnitList").append("<option value='" + row.Id + "'>" + row.UnitName + "</option>")
                });
            });



            $("#TbItem #MainRow #Price").val(0);
            $("#TbItem #MainRow #Qty").val(1);
            $("#TbItem #MainRow #Total").text('');
            $("#TbItem #MainRow #Disper").val(0);
            $("#TbItem #MainRow #DisValue").val(0);
            $("#TbItem #MainRow #Net").text('');
            $("#Price").val(0);
            $("#Qty").val(1);
            $("#Total").text('');
            $("#Disper").val(0);
            $("#DisValue").val(0);
            $("#Net").text('');
            $("#ItemNumber").val(0);
            $("#ItemBalance").val(0);

        }


    });
    $("#submit").click(function () {

        //var Expences1 = $("#DirectExpenses1").val();
        //var Expences2 = $("#DirectExpenses2").val();
        //var totalExpences = parseFloat(Expences1) + parseFloat(Expences2);
        //var net = $("#TotalNet").html()
        //var NetExpences = parseFloat(totalExpences) / parseFloat(net);
        
        $("#OrdersItems tbody tr").each(function () {
            
            var itemPrice = $(".Price").val();
            //itemCost = parseFloat(NetExpences) * parseFloat(itemPrice);
            //var a = $(".ItemCost").val();
            //if (a !=.0111) {
            //    $(".ItemCostt").val(parseFloat(NetExpences) * parseFloat(itemPrice));
            //}
           
        });
        var isValid = true;
        var itemsList = [];
        $("#OrdersItems tbody tr").each(function () {
          
            var item = {
                ItemCategoriesId: $('#ItemCategoriesList', this).val(),
                ItemId: $('.ItemListCLS', this).val(), 
                Price: $('.Price', this).val(),
                UnitId: $('.UnitList', this).val(),
                Amount: $('.Qty', this).val(),
                Total: $('.Total', this).text(),
               /* ItemBalance: $('#ItemBalance', this).val(),*/
                StoreId: $('#StoreList').val(),
                Notes: $(".NotesD",this).val()
            }
            itemsList.push(item);
        });

        var Vendor = $('#VendorsList').val();
      
        var Store = $('.StoreList').val();
      
        var Employee = $('#EmployeeList').val();
        var PurchaseType = $('#ReceiveRecordTypeList').val();
        
        if (itemsList.length == 0 ) {

            toastr.warning('اختر الصنف ...!' )
            isValid = false;

        }

        if (document.getElementById("VendorsList").selectedIndex == 0) {
            $("#cusMsg").show();
            isValid = false;
        }
        if (document.getElementById("StoreList").selectedIndex == 0) {

            $("#stMsg").show();

            isValid = false;
        }
        if (document.getElementById("InternalDepartments").selectedIndex == 0) {
            isValid = false;
        }
        if (document.getElementById("ManagerId").selectedIndex == 0) {
            $("#empMsg").show();
            isValid = false;
        }
        
        if (document.getElementById("RecipientId").selectedIndex == 0) {
            $("#empMsg").show();
            isValid = false;
        }
        //if (document.getElementById("ReceiveRecordTypeList").selectedIndex == 0) {

        //    $("#typeMsg").show();

        //    isValid = false;
        //}
       
        if (isValid == false) {
            toastr.error('لم يتم الحفظ ...!')
        }
        if (isValid) {
            var data = {
                OrderSerial: $("#TrxSerial").val(),
                Date: $("#PurchaseINVDate").val(),
                PagesCount: $("#PagesCount").val(),
                Attachments: $("#Attachments").val(),
                InternalDepartmentsId: $("#InternalDepartments").val(),
                StoreId: $("#StoreList").val(),
                DocDescription: $("#DocDescription").val(),
                DocNo: $("#DocNo").val(),
                DocDate: $("#DocDate").val(),
                RecordNo: $("#RecordNo").val(),
                AssignmentYear: $("#AssignmentYear").val(),
                ManagerId: $("#ManagerId").val(),
                VendorId: $("#VendorsList").val(),
                RecipientId: $("#RecipientId").val(),
                RowsCount: $("#RowsCount").val(),

                
                RecieveRecordTotal: $("#TotalBeforeDis").text(),
                InvoiceDisPer: $("#TotalDisper").val(), 
                RecieveRecordDisValue: $("#TotalDis").val(),
                NetValue: $("#TotalNet").text(), 
                Tax: $("#Tax").val(),
                //RemainingValue: $("#Residual").text(), 
                Notes: $("#Notes").val(), 
                Items: itemsList
            }


            $("#submit").attr("disabled", true);
            $(".remove ").hide();

            //AddOrderAndDetails
            $.ajax({
                type: 'POST',
                url: '/ReceiveRecord/AddRecieveRecord',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (data) {
                    if (data.status) {
                        //$('#Ordermessages').text(data.message);
                        toastr.success("تم الحفظ بنجاح")

                    }
                    else {
                        //$('#Ordermessages').text(data.message);
                        toastr.danger("فشل في الحفظ")

                    }
                   

                }

            });

        }


    });

    $("#TotalNet").click(function () {
        var net = $("#TotalNet").text();
        
        var TaxSett = $("#TaxSetting").val();
     
        if (TaxSett > 0) {
            var tax = net * TaxSett / 100;
            
            $("#Tax").val(tax);
            var tot = net + tax;
            alert (tot)
            $("#TotalNet").val(tot);
        }
    });
   
});








