/*!
 * Copyright 2005-2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 */

(function(Mibew, $) {
    $(document).ready(function() {
        $('#check-nv').click(function(){
            Mibew.Utils.playSound('../sounds/new_user');
        });

        $('#check-nm').click(function() {
            Mibew.Utils.playSound('../sounds/new_message');
        });
    });
})(Mibew, $);
