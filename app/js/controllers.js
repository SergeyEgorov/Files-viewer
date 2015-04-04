'use strict';

/* Controllers */

var filesViewerControllers = angular.module('filesViewerControllers', []);

filesViewerControllers.controller('HomeCtrl', ['$scope',
    function($scope, $modal) {
        $scope.files = [{
            "name": "Sample.txt"
        }, {
            "name": "Other.doc"
        }, {
            "name": "Third.jpg"
        }, {
            "name": "Fourth.js"
        }];

        /* Check all files */
        $scope.checkAll = function () {
            $scope.selectedAll = $scope.selectedAll ? true : false;

            angular.forEach($scope.files, function (item) {
                item.selected = $scope.selectedAll;
            });
        };

        /* Enter to Edit mode */
        $scope.rename = function(){
            angular.forEach($scope.files, function (item) {
               if(item.selected) {
                   item.editMode = true;
                   item.originName = item.name;
               }
            });
        };

        /* Open/close form for create new file */
        $scope.triggerNewFolder = function () {
            $scope.addNewFolderMode = $scope.addNewFolderMode ? false : true;
            $scope.newFolder = "";
        };

        /* Add new folder */
        $scope.addNewFolder = function(){
            $scope.files.unshift({
                "name": $scope.newFolder,
                "type": "folder"
            });
            $scope.newFolder = "";
            $scope.triggerNewFile();
        }

        /* Exit from Edit Mode */
        $scope.cancelEditMode = function(index){
            $scope.files[index].editMode =
            $scope.files[index].selected = false;

            $scope.files[index].name = $scope.files[index].originName;
        }

        /* Save renamed file */
        $scope.saveRenamedFile = function(index){
            $scope.files[index].editMode =
            $scope.files[index].selected = false;
        }

        /* Delete selected files */
        $scope.deleteFile = function(){
            var result = confirm("Are you sure you want to delete the selected files?");
            if(result) {
                angular.forEach($scope.files, function (item, index) {
                    if (item.selected) {
                        $scope.files.splice(index, 1);
                    }
                });
            }
        }

    }]);